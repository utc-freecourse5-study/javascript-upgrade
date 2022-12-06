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
  };
}

module.exports = UpgradeGame;
