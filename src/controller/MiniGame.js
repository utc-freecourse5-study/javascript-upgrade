const { GAME_TYPE, BONUS_PROBABILITY, INPUT_VALUE } = require('../utils/constants');
const OutputView = require('../view/OutputView');

class MiniGame {
  #miniGameModel;

  constructor(miniGameModel) {
    this.#miniGameModel = miniGameModel;
    this.#miniGameModel.makeRandomNumber();
  }

  play(inputMiniGame) {
    const result = this.#handleMiniGame(inputMiniGame);
    this.printResult(result);
    return result;
  }

  #handleMiniGame(inputMiniGame) {
    return inputMiniGame === INPUT_VALUE.odd || inputMiniGame === INPUT_VALUE.even
      ? this.#handleOddAndEven(inputMiniGame)
      : this.#handleMiniGameNumber(inputMiniGame);
  }

  #handleOddAndEven(inputMiniGame) {
    return this.#miniGameModel.isOddAndEven(inputMiniGame)
      ? { result: true, type: GAME_TYPE.oddAndEven, bonus: BONUS_PROBABILITY.oddAndEvenSuccess }
      : { result: false, type: GAME_TYPE.oddAndEven, bonus: BONUS_PROBABILITY.fail };
  }

  #handleMiniGameNumber(inputMiniGame) {
    return this.#miniGameModel.isCorrectMiniGameNumber(Number(inputMiniGame))
      ? { result: true, type: GAME_TYPE.number, bonus: BONUS_PROBABILITY.numberSuccess }
      : { result: false, type: GAME_TYPE.number, bonus: BONUS_PROBABILITY.fail };
  }

  printResult({ result, type, bonus }) {
    result
      ? OutputView.printMiniGameSuccess(type, this.#miniGameModel.getRandomNumber(), bonus)
      : OutputView.printMiniGameFail(type, this.#miniGameModel.getRandomNumber());
  }
}

module.exports = MiniGame;
