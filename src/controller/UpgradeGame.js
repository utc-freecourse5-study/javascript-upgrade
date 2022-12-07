const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

const UpgradeUtils = require('../UpgradeUtils');
const UpgradeModel = require('../model/UpgradeModel');

const Validation = require('../utils/Validation');
const checkValidate = require('../utils/checkValidate');

const { Console } = require('@woowacourse/mission-utils');
const MiniGame = require('./MiniGame');
const { GAME_RESULT, INPUT_VALUE } = require('../utils/constants');

class UpgradeGame {
  #upgradeModel;

  constructor() {
    OutputView.printStart();
    this.#upgradeModel = new UpgradeModel();
  }

  start() {
    const currentUpgradePhase = this.#upgradeModel.getCurrentUpgradePhase();
    OutputView.printCurrentUpgradePhase(currentUpgradePhase) || this.#requestChallengeCommand();
  }

  #requestChallengeCommand() {
    InputView.readChallengeCommand(this.#checkChallengeCommand);
  }

  #checkChallengeCommand = (selectChallenge) => {
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
    return OutputView.printResult(GAME_RESULT.success, probability) || this.#requstRetryOrQuit();
  }

  #handleGameFail(probability) {
    OutputView.printResult(GAME_RESULT.fail, probability) || this.#handleFinish();
  }

  #requstRetryOrQuit() {
    OutputView.printCurrentUpgradePhase(this.#upgradeModel.getCurrentUpgradePhase());
    InputView.readChallengeCommand(this.#checkRetryOrQuit);
  }

  #checkRetryOrQuit = (selectChallenge) => {
    if (!checkValidate(Validation.isTryChallenge, selectChallenge)) {
      return this.requestChallengeCommand();
    }

    this.#handleRetryOrQuit(selectChallenge);
  };

  #handleRetryOrQuit(selectChallenge) {
    if (selectChallenge === INPUT_VALUE.challenge) return this.#requestMiniGameInput();
    this.#handleFinish();
  }

  #handleFinish() {
    const currentUpgradePhase = this.#upgradeModel.getCurrentUpgradePhase();
    return OutputView.printFinalUpgradePhase(currentUpgradePhase) || Console.close();
  }
}

module.exports = UpgradeGame;
