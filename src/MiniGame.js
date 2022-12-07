const OutputView = require('./OutputView');

class MiniGame {
  constructor(upgradeModel) {
    this.upgradeModel = upgradeModel;
  }

  handleMiniGameInput(inputMiniGame) {
    this.upgradeModel.makeRandomNumber();

    return inputMiniGame === 'O' || inputMiniGame === 'E'
      ? this.#handleOddAndEven(inputMiniGame)
      : this.#handleMiniGameNumber(inputMiniGame);
  }

  #handleOddAndEven(inputMiniGame) {
    return this.upgradeModel.isOddAndEven(inputMiniGame)
      ? this.#handleMiniGameResult(true, '홀/짝', 10)
      : this.#handleMiniGameResult(false, '홀/짝', 0);
  }

  #handleMiniGameNumber(inputMiniGame) {
    return this.upgradeModel.isCorrectMiniGameNumber(Number(inputMiniGame))
      ? this.#handleMiniGameResult(true, '숫자', 50)
      : this.#handleMiniGameResult(false, '숫자', 0);
  }

  #handleMiniGameResult(result, type, bonus) {
    result
      ? OutputView.printMiniGameSuccess(type, this.upgradeModel.getRandomNumber(), bonus)
      : OutputView.printMiniGameFail(type, this.upgradeModel.getRandomNumber());
    return bonus;
  }
}

module.exports = MiniGame;
