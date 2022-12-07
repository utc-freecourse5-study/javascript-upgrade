const INPUT_MESSAGE = Object.freeze({
  challengeCommand: '강화 도전 여부를 입력해주세요. (도전: Y, 중단: N)\n',
  miniGameInput:
    '\n미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요. (숫자: 0 ~ 9 사이의 수, 홀: O, 짝: E)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  start: '무기 강화 게임을 시작합니다.',
  currentUpgradePhase: (phase) => `\n현재 강화 등급: +${phase}강`,
  finalUpgradePhase: (phase) => `\n최종 강화 결과: +${phase}강`,
  miniGameSuccess: (type, randomNum, bonus) =>
    `\n미니 게임 랜덤 수: ${randomNum} --> ${type} 맞추기 성공! 강화 확률 ${bonus}% 증가!`,
  miniGameFail: (type, randomNum) => `\n미니 게임 랜덤 수: ${randomNum} --> ${type} 맞추기 실패!`,
  gameResult: (result, bonus) => `\n강화 ${result}! (강화 확률 ${bonus}%)`,
});

const ERROR_MESSAGE = Object.freeze({
  isTryChallenge: '[ERROR] 도전은 Y, 중단은 N을 입력해주세요',
  validateMinigameInput:
    '[ERROR] 미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요. (숫자: 0 ~ 9 사이의 수, 홀: O, 짝: E)',
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
