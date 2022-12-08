const { UPGRADE_PROBABILITY } = require('../utils/constants');

class UpgradeModel {
  #upgradeGrade;

  constructor() {
    this.#upgradeGrade = 0;
  }

  getCurrentUpgradeGrade() {
    return this.#upgradeGrade;
  }

  addUpgradeGrade() {
    this.#upgradeGrade += 1;
  }

  addBonusProbability(bonus) {
    const upgradeProbability = UPGRADE_PROBABILITY;
    const sumBonus = upgradeProbability[this.#upgradeGrade] + bonus;
    return sumBonus >= 100 ? 100 : sumBonus;
  }
}

module.exports = UpgradeModel;
