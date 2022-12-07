const INPUT_MESSAGE = Object.freeze({
  challengeCommand: '강화 도전 여부를 입력해주세요. (도전: Y, 중단: N)\n',
  miniGameInput:
    '\n미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요. (숫자: 0 ~ 9 사이의 수, 홀: O, 짝: E)\n',
});

const ERROR_MESSAGE = Object.freeze({
  isTryChallenge: '[ERROR] 도전은 Y, 중단은 N을 입력해주세요',
  validateMinigameInput:
    '[ERROR] 미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요. (숫자: 0 ~ 9 사이의 수, 홀: O, 짝: E)',
});

module.exports = { INPUT_MESSAGE, ERROR_MESSAGE };
