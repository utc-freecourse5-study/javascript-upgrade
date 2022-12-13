const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printOpening() {
    MissionUtils.Console.print("무기 강화 겡미을 시작합니다.");
  },

  printCurrentLevel(level) {
    MissionUtils.Console.print(`현재 강화 등급: +${level}강`);
  },

  printFinalResult(level) {
    MissionUtils.Console.print(`최종 강화 결과: +${level}강`);
  },

  printNumberGameResult(randomNumber, isSuccess) {
    MissionUtils.Console.print(
      `미니 게임 랜덤 수: ${randomNumber} --> 숫자 맞추기 ${isSuccess ? "성공! 강화 확률 50% 증가!" : "실패!"}`
    );
  },

  printOddGameResult(randomNumber, isSuccess) {
    MissionUtils.Console.print(
      `미니 게임 랜덤 수: ${randomNumber} --> 홀/짝 맞추기 ${isSuccess ? "성공! 강화 확률 10% 증가!" : "실패!"}`
    );
  },
};

module.exports = OutputView;
