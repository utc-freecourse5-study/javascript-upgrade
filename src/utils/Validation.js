const Validation = {
  isTryChallenge(selectChallenge) {
    if (selectChallenge === 'Y' || selectChallenge === 'N') return true;
    throw new Error('도전은 Y, 중단은 N을 입력해주세요');
  },

  checkMiniGameInput(inputMiniGame) {
    if (
      Validation.checkMiniGameNumber(inputMiniGame) ||
      Validation.checkMiniGameOddAndEven(inputMiniGame)
    ) {
      return true;
    }
    throw new Error(
      '미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요. (숫자: 0 ~ 9 사이의 수, 홀: O, 짝: E)'
    );
  },

  checkMiniGameNumber(inputMiniGame) {
    if (new RegExp('^[0-9]+$').test(inputMiniGame) && inputMiniGame.length === 1) return true;
    return false;
  },

  checkMiniGameOddAndEven(inputMiniGame) {
    if (inputMiniGame === 'O' || inputMiniGame === 'E') return true;
    return false;
  },
};

module.exports = Validation;
