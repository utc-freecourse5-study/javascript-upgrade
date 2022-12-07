const generateMiniGameNumber = require('../generateMiniGameNumber');

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
    const upgradeProbability = [80, 70, 60, 50, 45, 40, 35, 30, 20, 10];
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
    if (inputMiniGame === 'O' && this.#randomNumber % 2 === 1) return true;
    if (inputMiniGame === 'O' && this.#randomNumber % 2 === 0) return false;
    if (inputMiniGame === 'E' && this.#randomNumber % 2 === 0) return true;
    if (inputMiniGame === 'E' && this.#randomNumber % 2 === 1) return false;
  }

  isCorrectMiniGameNumber(inputMiniGame) {
    if (inputMiniGame === this.#randomNumber) return true;
    return false;
  }
}

module.exports = UpgradeModel;
