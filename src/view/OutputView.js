const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/message');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printCurrentUpgradePhase(phase) {
    Console.print(OUTPUT_MESSAGE.currentUpgradePhase(phase));
  },

  printFinalUpgradePhase(phase) {
    Console.print(OUTPUT_MESSAGE.finalUpgradePhase(phase));
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
