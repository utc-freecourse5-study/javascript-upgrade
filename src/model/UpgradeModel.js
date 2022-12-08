const { UPGRADE_PROBABILITY } = require('../utils/constants');

class UpgradeModel {
  #upgradePhase;

  constructor() {
    this.#upgradePhase = 0;
  }

  getCurrentUpgradePhase() {
    return this.#upgradePhase;
  }

  addUpgradePhase() {
    this.#upgradePhase += 1;
  }

  addBonusProbability(bonus) {
    const upgradeProbability = UPGRADE_PROBABILITY;
    const sumBonus = upgradeProbability[this.#upgradePhase] + bonus;
    return sumBonus >= 100 ? 100 : sumBonus;
  }
}

module.exports = UpgradeModel;
