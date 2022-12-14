const generateMiniGameNumber = require("../utils/generateMiniGameNumber");
const MiniGame = require("./MiniGame");
const Weapon = require("./Weapon");

class UpgradeGame {
  #weapon;

  constructor() {
    this.#weapon = new Weapon();
  }

  // #level;
  // #probability;

  // constructor() {
  //   this.#level = 0;
  //   this.#probability = this.#initProbability();
  // }

  getWeaponLevel() {
    return this.#weapon.getLevel();
  }

  // #initProbability() {
  //   if (this.#level > 9) return 10;

  //   return probability[this.#level + 1];
  // }

  weaponUpgrade() {
    return this.#weapon.upgrade();
  }

  // #addProbability(probability) {
  //   if (this.#probability + probability > 100) {
  //     this.#probability = 100;
  //     return;
  //   }

  //   this.#probability += probability;
  // }

  playOddGame(command) {
    const randomNumber = generateMiniGameNumber();
    const miniGame = new MiniGame(randomNumber);
    const result = miniGame.playOddGame(command);

    if (result) this.#weapon.addProbability(10);

    return { answer: randomNumber, result: result };
  }

  playNumberGame(number) {
    const randomNumber = generateMiniGameNumber();
    const miniGame = new MiniGame(randomNumber);
    const result = miniGame.playNumberGame(number);

    if (result) this.#weapon.addProbability(50);

    return { answer: randomNumber, result: result };
  }
}

module.exports = UpgradeGame;
