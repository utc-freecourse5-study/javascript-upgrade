const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('무기 강화 게임을 시작합니다.\n');
  },

  printCurrentUpgradePhase(phase) {
    Console.print(`현재 강화 등급: +${phase}강\n`);
  },
};

module.exports = OutputView;
