const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printOpening() {
    MissionUtils.Console.print("무기 강화 겡미을 시작합니다.");
  },

  printCurrentLevel(level) {
    MissionUtils.Console.print(`현재 강화 등급: +${level}강`);
  },
};

module.exports = OutputView;
