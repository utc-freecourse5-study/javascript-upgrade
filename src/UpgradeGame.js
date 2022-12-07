const InputView = require('./InputView');
const OutputView = require('./OutputView');
const UpgradeModel = require('./UpgradeModel');
const UpgradeUtils = require('./UpgradeUtils');

const Validation = require('./utils/Validation');
const checkValidate = require('./utils/checkValidate');

const { Console } = require('@woowacourse/mission-utils');
const MiniGame = require('./MiniGame');

class UpgradeGame {
  #upgradeModel;

  constructor() {
    OutputView.printStart();
    this.#upgradeModel = new UpgradeModel();
  }

  start() {
    OutputView.printCurrentUpgradePhase(this.#upgradeModel.getCurrentUpgradePhase());
    this.#requestChallengeCommand();
  }

  #requestChallengeCommand() {
    InputView.readChallengeCommand(this.#checkChllengeCommand);
  }

  #checkChllengeCommand = (selectChallenge) => {
    if (!checkValidate(Validation.isTryChallenge, selectChallenge)) {
      return this.#requestChallengeCommand();
    }

    this.#requestMiniGameInput();
  };

  #requestMiniGameInput() {
    InputView.readMiniGameInput(this.#checkMiniGameInput);
  }

  #checkMiniGameInput = (inputMiniGame) => {
    if (!checkValidate(Validation.checkMiniGameInput, inputMiniGame)) {
      return this.#requestMiniGameInput();
    }

    const bonus = new MiniGame(this.#upgradeModel).handleMiniGameInput(inputMiniGame);
    this.#upgradeGameResult(bonus);
  };

  #upgradeGameResult(bonus) {
    const probability = this.#upgradeModel.addBonusProbability(bonus);
    const gameResult = UpgradeUtils.isUpgraded(probability);
    gameResult ? this.#handleGameSuccess(probability) : this.#handleGameFail(probability);
  }

  #handleGameSuccess(probability) {
    this.#upgradeModel.addUpgradePhase();
    return OutputView.printResult('성공', probability) || this.#requstRetryOrQuit();
  }

  #handleGameFail(probability) {
    OutputView.printResult('실패', probability) || this.#handleFinish();
  }

  #requstRetryOrQuit() {
    OutputView.printCurrentUpgradePhase(this.#upgradeModel.getCurrentUpgradePhase());
    InputView.readRetryOrQuit(this.#checkRetryOrQuit);
  }

  #checkRetryOrQuit = (selectChallenge) => {
    if (!checkValidate(Validation.isTryChallenge, selectChallenge)) {
      return this.requestChallengeCommand();
    }

    this.#handleRetryOrQuit(selectChallenge);
  };

  #handleRetryOrQuit(selectChallenge) {
    if (selectChallenge === 'Y') return this.#requestMiniGameInput();
    this.#handleFinish();
  }

  #handleFinish() {
    OutputView.printFinalUpgradePhase(this.#upgradeModel.getCurrentUpgradePhase());
    return Console.close();
  }
}

module.exports = UpgradeGame;
