class UpgradeModel {
  #currentUpgradePhase;

  constructor() {
    this.#currentUpgradePhase = 0;
  }

  getCurrentUpgradePhase() {
    return this.#currentUpgradePhase;
  }
}

module.exports = UpgradeModel;
