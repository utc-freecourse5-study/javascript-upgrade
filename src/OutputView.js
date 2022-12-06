const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('무기 강화 게임을 시작합니다.');
  },

  printCurrentUpgradePhase(phase) {
    Console.print(`\n현재 강화 등급: +${phase}강`);
  },

  printFinalUpgradePhase(phase) {
    Console.print(`\n최종 강화 결과: +${phase}강`);
  },

  printOddAndEvenSuccess(randomNum, bonus) {
    Console.print(
      `\n미니 게임 랜덤 수: ${randomNum} --> 홀/짝 맞추기 성공! 강화 확률 ${bonus}% 증가!`
    );
  },

  printOddAndEvenFail(randomNum) {
    Console.print(`\n미니 게임 랜덤 수: ${randomNum} --> 홀/짝 맞추기 실패!`);
  },

  printGuessingNumbersSuccess(randomNum, bonus) {
    Console.print(
      `\n미니 게임 랜덤 수: ${randomNum} --> 숫자 맞추기 성공! 강화 확률 ${bonus}% 증가!`
    );
  },

  printGuessingNumbersFail(randomNum) {
    Console.print(`\n미니 게임 랜덤 수: ${randomNum} --> 숫자 맞추기 실패!`);
  },

  printResult(result, bonus) {
    Console.print(`\n강화 ${result}! (강화 확률 ${bonus}%)`);
  },

  printErrorMessage(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
