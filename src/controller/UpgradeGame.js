const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

const UpgradeUtils = require('../UpgradeUtils');
const UpgradeModel = require('../model/UpgradeModel');

const Validation = require('../utils/Validation');
const checkValidate = require('../utils/checkValidate');

const { Console } = require('@woowacourse/mission-utils');
const MiniGame = require('./MiniGame');
const { GAME_RESULT, INPUT_VALUE } = require('../utils/constants');
const MiniGameModel = require('../model/MiniGameModel');

class UpgradeGame {
  #upgradeModel;

  constructor() {
    OutputView.printStart();
    this.#upgradeModel = new UpgradeModel();
  }

  start() {
    const currentUpgradeGrade = this.#upgradeModel.getCurrentUpgradeGrade();
    OutputView.printCurrentUpgradeGrade(currentUpgradeGrade);
    this.#requestChallengeCommand();
  }

  #requestChallengeCommand() {
    InputView.readChallengeCommand(this.#checkChallengeCommand);
  }

  #checkChallengeCommand = (selectChallenge) => {
    if (!checkValidate(Validation.isTryChallenge, selectChallenge)) {
      this.#requestChallengeCommand();
      return;
    }
    this.#handleRetryOrQuit(selectChallenge);
  };

  #requestMiniGameInput() {
    InputView.readMiniGameInput(this.#checkMiniGameInput);
  }

  #checkMiniGameInput = (inputMiniGame) => {
    if (!checkValidate(Validation.checkMiniGameInput, inputMiniGame)) {
      this.#requestMiniGameInput();
      return;
    }

    this.#handleMinigGame(inputMiniGame);
  };

  #handleMinigGame(inputMiniGame) {
    const miniGameModel = new MiniGameModel();
    const miniGame = new MiniGame(miniGameModel);
    const result = miniGame.play(inputMiniGame);

    miniGame.printResult(result);
    this.#upgradeGameResult(result.bonus);
  }

  #upgradeGameResult(bonus) {
    const probability = this.#upgradeModel.addBonusProbability(bonus);
    const gameResult = UpgradeUtils.isUpgraded(probability);
    gameResult ? this.#handleGameSuccess(probability) : this.#handleGameFail(probability);
  }

  #handleGameSuccess(probability) {
    this.#upgradeModel.addUpgradeGrade();
    OutputView.printResult(GAME_RESULT.success, probability);
    this.#requstRetryOrQuit();
  }

  #handleGameFail(probability) {
    OutputView.printResult(GAME_RESULT.fail, probability);
    this.#handleFinish();
  }

  #requstRetryOrQuit() {
    OutputView.printCurrentUpgradeGrade(this.#upgradeModel.getCurrentUpgradeGrade());
    InputView.readChallengeCommand(this.#checkRetryOrQuit);
  }

  #checkRetryOrQuit = (selectChallenge) => {
    if (!checkValidate(Validation.isTryChallenge, selectChallenge)) {
      this.requestChallengeCommand();
      return;
    }

    this.#handleRetryOrQuit(selectChallenge);
  };

  #handleRetryOrQuit(selectChallenge) {
    if (selectChallenge === INPUT_VALUE.challenge) return this.#requestMiniGameInput();
    this.#handleFinish();
  }

  #handleFinish() {
    const currentUpgradeGrade = this.#upgradeModel.getCurrentUpgradeGrade();
    OutputView.printFinalUpgradeGrade(currentUpgradeGrade);
    return Console.close();
  }
}

module.exports = UpgradeGame;
