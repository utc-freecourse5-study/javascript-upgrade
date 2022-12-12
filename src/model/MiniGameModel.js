const generateMiniGameNumber = require('../generateMiniGameNumber');
const { INPUT_VALUE } = require('../utils/constants');

class MiniGameModel {
  #randomNumber;

  makeRandomNumber() {
    this.#randomNumber = generateMiniGameNumber();
  }

  getRandomNumber() {
    return this.#randomNumber;
  }

  isOddAndEven(inputMiniGame) {
    if (inputMiniGame === INPUT_VALUE.odd && this.#randomNumber % 2 === 1) return true;
    if (inputMiniGame === INPUT_VALUE.even && this.#randomNumber % 2 === 0) return true;
    return false;
  }

  isCorrectMiniGameNumber(inputMiniGame) {
    if (inputMiniGame === this.#randomNumber) return true;
    return false;
  }
}

module.exports = MiniGameModel;
