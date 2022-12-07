const { GAME_TYPE, BONUS_PROBABILITY, INPUT_VALUE } = require('../utils/constants');
const OutputView = require('../view/OutputView');

class MiniGame {
  constructor(upgradeModel) {
    this.upgradeModel = upgradeModel;
  }

  handleMiniGameInput(inputMiniGame) {
    this.upgradeModel.makeRandomNumber();

    return inputMiniGame === INPUT_VALUE.odd || inputMiniGame === INPUT_VALUE.even
      ? this.#handleOddAndEven(inputMiniGame)
      : this.#handleMiniGameNumber(inputMiniGame);
  }

  #handleOddAndEven(inputMiniGame) {
    return this.upgradeModel.isOddAndEven(inputMiniGame)
      ? this.#handleMiniGameResult(true, GAME_TYPE.oddAndEven, BONUS_PROBABILITY.oddAndEvenSuccess)
      : this.#handleMiniGameResult(false, GAME_TYPE.oddAndEven, BONUS_PROBABILITY.fail);
  }

  #handleMiniGameNumber(inputMiniGame) {
    return this.upgradeModel.isCorrectMiniGameNumber(Number(inputMiniGame))
      ? this.#handleMiniGameResult(true, GAME_TYPE.number, BONUS_PROBABILITY.numberSuccess)
      : this.#handleMiniGameResult(false, GAME_TYPE.number, BONUS_PROBABILITY.fail);
  }

  #handleMiniGameResult(result, type, bonus) {
    result
      ? OutputView.printMiniGameSuccess(type, this.upgradeModel.getRandomNumber(), bonus)
      : OutputView.printMiniGameFail(type, this.upgradeModel.getRandomNumber());
    return bonus;
  }
}

module.exports = MiniGame;
