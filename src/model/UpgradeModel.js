const generateMiniGameNumber = require('../generateMiniGameNumber');
const { UPGRADE_PROBABILITY, INPUT_VALUE } = require('../utils/constants');

class UpgradeModel {
  #upgradePhase;
  #randomNumber;

  constructor() {
    this.#upgradePhase = 0;
    this.#randomNumber = -1;
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

  makeRandomNumber() {
    this.#randomNumber = generateMiniGameNumber();
  }

  getRandomNumber() {
    return this.#randomNumber;
  }

  isOddAndEven(inputMiniGame) {
    if (inputMiniGame === INPUT_VALUE.odd && this.#randomNumber % 2 === 1) return true;
    if (inputMiniGame === INPUT_VALUE.odd && this.#randomNumber % 2 === 0) return false;
    if (inputMiniGame === INPUT_VALUE.even && this.#randomNumber % 2 === 0) return true;
    if (inputMiniGame === INPUT_VALUE.even && this.#randomNumber % 2 === 1) return false;
  }

  isCorrectMiniGameNumber(inputMiniGame) {
    if (inputMiniGame === this.#randomNumber) return true;
    return false;
  }
}

module.exports = UpgradeModel;
