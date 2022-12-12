const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/message');

const InputView = {
  // 강화 도전 여부
  readChallengeCommand(callback) {
    Console.readLine(INPUT_MESSAGE.challengeCommand, callback);
  },

  // 미니 게임 숫자 혹은 커맨드
  readMiniGameInput(callback) {
    Console.readLine(INPUT_MESSAGE.miniGameInput, callback);
  },
};

module.exports = InputView;
