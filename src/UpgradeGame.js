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
    if (inputMiniGame === 'O' || inputMiniGame === 'E') return this.handleOddAndEven(inputMiniGame);
    return this.handleMiniGameNumber(inputMiniGame);
  }

  handleOddAndEven(inputMiniGame) {
    return this.#upgradeModel.isOddAndEven(inputMiniGame)
      ? this.handleMiniGameResult(true, '홀/짝', 10)
      : this.handleMiniGameResult(false, '홀/짝', 0);
  }

  handleMiniGameNumber(inputMiniGame) {
    return this.#upgradeModel.isCorrectMiniGameNumber(Number(inputMiniGame))
      ? this.handleMiniGameResult(true, '숫자', 50)
      : this.handleMiniGameResult(false, '숫자', 0);
  }

  handleMiniGameResult(result, type, bonus) {
    result
      ? OutputView.printMiniGameSuccess(type, this.#upgradeModel.getRandomNumber(), bonus)
      : OutputView.printMiniGameFail(type, this.#upgradeModel.getRandomNumber());
    return this.upgradeGameResult(bonus);
  }

  upgradeGameResult(bonus) {
    const pro = this.#upgradeModel.addBonusProbability(bonus);

    if (UpgradeUtils.isUpgraded(pro)) {
      this.#upgradeModel.addUpgradePhase();
      return OutputView.printResult('성공', pro) || this.requstRetryOrQuit();
    }
    return OutputView.printResult('실패', pro) || this.requstRetryOrQuit();
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
