const generateMiniGameNumber = require('./generateMiniGameNumber');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const UpgradeModel = require('./UpgradeModel');
const UpgradeUtils = require('./UpgradeUtils');
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
    return this.#upgradeModel.isOddAndEven(inputMiniGame)
      ? this.upgradeGameResult('성공', 10)
      : this.upgradeGameResult('실패', 0);
  }

  handleMiniGameNumber(inputMiniGame) {
    this.#upgradeModel.isCorrectMiniGameNumber(Number(inputMiniGame))
      ? this.upgradeGameResult('성공', 50)
      : this.upgradeGameResult('실패', 0);
  }

  upgradeGameResult(result, bonus) {
    OutputView.printRandomGameNumber(this.#upgradeModel.getRandomNumber(), result, bonus);
    const pro = this.#upgradeModel.getUpgradeProbability(bonus);
    const upgradeResult = UpgradeUtils.isUpgraded(pro);

    if (upgradeResult) {
      this.#upgradeModel.addUpgradePhase();
      OutputView.printResult('성공', pro);
      return this.requstRetryOrQuit();
    }
    OutputView.printResult('실패', pro);
  }
}

module.exports = UpgradeGame;
