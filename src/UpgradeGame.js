const InputView = require('./InputView');
const OutputView = require('./OutputView');
const UpgradeModel = require('./UpgradeModel');
const HandleValidation = require('./utils/handleValidation');
const Validation = require('./utils/Validation');

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
    if (!HandleValidation.checkValidate(Validation.isTryChallenge, selectChallenge)) {
      return this.requestChallengeCommand();
    }
    this.requestMiniGameInput();
  };

  requestMiniGameInput() {
    InputView.readMiniGameInput(this.checkMiniGameInput);
  }

  checkMiniGameInput = (inputMiniGame) => {
    if (!HandleValidation.checkValidate(Validation.checkMiniGameInput, inputMiniGame)) {
      return this.requestMiniGameInput();
    }
  };
}

module.exports = UpgradeGame;
