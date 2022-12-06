const InputView = require('./InputView');
const OutputView = require('./OutputView');
const UpgradeModel = require('./UpgradeModel');
const UpgradeUtils = require('./UpgradeUtils');

const Validation = require('./utils/Validation');
const checkValidate = require('./utils/checkValidate');
const { Console } = require('@woowacourse/mission-utils');

class UpgradeGame {
  #upgradeModel;

  constructor() {
    OutputView.printStart();
    this.#upgradeModel = new UpgradeModel();
  }

  start() {
    OutputView.printCurrentUpgradePhase(this.#upgradeModel.getCurrentUpgradePhase());
    this.requestChallengeCommand();
  }

  requestChallengeCommand() {
    InputView.readChallengeCommand(this.checkChllengeCommand);
  }

  checkChllengeCommand = (selectChallenge) => {
    if (!checkValidate(Validation.isTryChallenge, selectChallenge)) {
      return this.requestChallengeCommand();
    }
    this.requestMiniGameInput();
  };

  requestMiniGameInput() {
    InputView.readMiniGameInput(this.checkMiniGameInput);
  }

  checkMiniGameInput = (inputMiniGame) => {
    if (!checkValidate(Validation.checkMiniGameInput, inputMiniGame)) {
      return this.requestMiniGameInput();
    }
    this.handleMiniGameInput(inputMiniGame);
  };

  handleMiniGameInput(inputMiniGame) {
    this.#upgradeModel.makeRandomNumber();
    if (inputMiniGame === 'O' || inputMiniGame === 'E') {
      return this.handleOddAndEven(inputMiniGame);
    }
    return this.handleMiniGameNumber(inputMiniGame);
  }

  handleOddAndEven(inputMiniGame) {
    if (this.#upgradeModel.isOddAndEven(inputMiniGame)) {
      OutputView.printMiniGameSuccess('홀/짝', this.#upgradeModel.getRandomNumber(), 10);
      return this.upgradeGameResult(10);
    }
    OutputView.printMiniGameFail('홀/짝', this.#upgradeModel.getRandomNumber());
    return this.upgradeGameResult(0);
  }

  handleMiniGameNumber(inputMiniGame) {
    if (this.#upgradeModel.isCorrectMiniGameNumber(Number(inputMiniGame))) {
      OutputView.printMiniGameSuccess('숫자', this.#upgradeModel.getRandomNumber(), 50);
      return this.upgradeGameResult(50);
    }
    OutputView.printMiniGameFail('숫자', this.#upgradeModel.getRandomNumber());
    return this.upgradeGameResult(0);
  }

  upgradeGameResult(bonus) {
    const pro = this.#upgradeModel.getUpgradeProbability(bonus);
    const upgradeResult = UpgradeUtils.isUpgraded(pro);

    if (upgradeResult) {
      this.#upgradeModel.addUpgradePhase();
      OutputView.printResult('성공', pro);
      return this.requstRetryOrQuit();
    }
    OutputView.printResult('실패', pro);
    return this.requstRetryOrQuit();
  }

  requstRetryOrQuit() {
    OutputView.printCurrentUpgradePhase(this.#upgradeModel.getCurrentUpgradePhase());
    InputView.readRetryOrQuit(this.checkRetryOrQuit);
  }

  checkRetryOrQuit = (selectChallenge) => {
    if (!checkValidate(Validation.isTryChallenge, selectChallenge)) {
      return this.requestChallengeCommand();
    }
    this.handleRetryOrQuit(selectChallenge);
  };

  handleRetryOrQuit(selectChallenge) {
    if (selectChallenge === 'Y') return this.requestMiniGameInput();
    OutputView.printFinalUpgradePhase(this.#upgradeModel.getCurrentUpgradePhase());
    return Console.close();
  }
}

module.exports = UpgradeGame;
