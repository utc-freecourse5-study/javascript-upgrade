const { INPUT_VALUE, REGEXP } = require('./constants');
const { ERROR_MESSAGE } = require('./message');

const Validation = {
  isTryChallenge(selectChallenge) {
    if (selectChallenge === INPUT_VALUE.challenge || selectChallenge === INPUT_VALUE.quit) {
      return true;
    }
    throw new Error(ERROR_MESSAGE.isTryChallenge);
  },

  checkMiniGameInput(inputMiniGame) {
    if (
      Validation.checkMiniGameNumber(inputMiniGame) ||
      Validation.checkMiniGameOddAndEven(inputMiniGame)
    ) {
      return true;
    }
    throw new Error(ERROR_MESSAGE.validateMinigameInput);
  },

  checkMiniGameNumber(inputMiniGame) {
    if (new RegExp(REGEXP.singleDigit).test(inputMiniGame) && inputMiniGame.length === 1)
      return true;
    return false;
  },

  checkMiniGameOddAndEven(inputMiniGame) {
    if (inputMiniGame === INPUT_VALUE.odd || inputMiniGame === INPUT_VALUE.even) return true;
    return false;
  },
};

module.exports = Validation;
