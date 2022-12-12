const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/message');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printCurrentUpgradeGrade(grade) {
    Console.print(OUTPUT_MESSAGE.currentUpgradeGrade(grade));
  },

  printFinalUpgradeGrade(grade) {
    Console.print(OUTPUT_MESSAGE.finalUpgradeGrade(grade));
  },

  printMiniGameSuccess(type, randomNum, bonus) {
    Console.print(OUTPUT_MESSAGE.miniGameSuccess(type, randomNum, bonus));
  },

  printMiniGameFail(type, randomNum) {
    Console.print(OUTPUT_MESSAGE.miniGameFail(type, randomNum));
  },

  printResult(result, bonus) {
    Console.print(OUTPUT_MESSAGE.gameResult(result, bonus));
  },

  printErrorMessage(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
