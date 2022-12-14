const generateMiniGameNumber = require("../utils/generateMiniGameNumber");
const MiniGame = require("./MiniGame");
const Weapon = require("./Weapon");

class UpgradeGame {
  #weapon;

  constructor() {
    this.#weapon = new Weapon();
  }

  getWeaponLevel() {
    return this.#weapon.getLevel();
  }

  weaponUpgrade() {
    return this.#weapon.upgrade();
  }

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
