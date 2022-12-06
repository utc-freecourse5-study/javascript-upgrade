const OutputView = require('./OutputView');
const UpgradeModel = require('./UpgradeModel');

class UpgradeGame {
  #upgradeModel;

  constructor() {
    OutputView.printStart();
    this.#upgradeModel = new UpgradeModel();
  }

  start() {
    OutputView.printCurrentUpgradePhase(this.#upgradeModel.getCurrentUpgradePhase());
  }
}

module.exports = UpgradeGame;
