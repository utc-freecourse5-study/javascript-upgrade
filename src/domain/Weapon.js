const probability = require("../utils/probability");
const UpgradeUtils = require("../utils/UpgradeUtils");

class Weapon {
  #level;
  #probability;

  constructor() {
    this.#level = 0;
    this.#probability = this.#initProbability();
  }

  getLevel() {
    return this.#level;
  }

  #initProbability() {
    if (this.#level > 9) return 10;

    return probability[this.#level + 1];
  }

  upgrade() {
    if (UpgradeUtils.isUpgraded(this.#probability)) {
      const prevProbability = this.#probability;
      this.#level += 1;
      this.#probability = this.#initProbability();
      return { isSuccess: true, probability: prevProbability };
    }
    return { isSuccess: false, probability: this.#probability };
  }

  addProbability(probability) {
    if (this.#probability + probability > 100) {
      this.#probability = 100;
      return;
    }

    this.#probability += probability;
  }
}

module.exports = Weapon;
