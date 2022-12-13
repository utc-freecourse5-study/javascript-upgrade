const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  // 강화 도전 여부
  readChallengeCommand(callback) {
    MissionUtils.Console.readLine("강화 도전 여부를 입력해주세요. (도전: Y, 중단: N)\n", callback);
  },

  // 미니 게임 숫자 혹은 커맨드
  readMiniGameInput(callback) {
    MissionUtils.Console.readLine("미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요.\n", callback);
  },
};

module.exports = InputView;
