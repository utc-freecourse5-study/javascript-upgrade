const generateMiniGameNumber = require("./generateMiniGameNumber");
const MiniGame = require("./MiniGame");
const probability = require("./Probability");
const UpgradeUtils = require("./UpgradeUtils");

class UpgradeGame {
  #level;
  #probability;

  constructor() {
    this.#level = 0;
    this.#probability = this.#initProbability();
  }

  #initProbability() {
    if (this.#level > 9) {
      this.#probability = 10;
      return;
    }
    this.#probability = probability[this.#level + 1];
  }

  upgrade() {
    if (UpgradeUtils.isUpgraded(this.#probability)) {
      this.#level += 1;
      this.#probability += this.#initProbability();
      return { isSuccess: true, probability: this.#probability };
    }
    return { isSuccess: false, probability: this.#probability, level: this.#level };
  }

  #addProbability(probability) {
    if (this.#probability + probability > 100) {
      this.#probability = 100;
      return;
    }

    this.#probability += probability;
  }

  playOddGame(command) {
    const randomNumber = generateMiniGameNumber();
    const miniGame = new MiniGame(randomNumber);
    const result = miniGame.playOddGame(command);

    if (result) this.#addProbability(10);

    return { answer: randomNumber, result: result };
  }

  playNumberGame(number) {
    const randomNumber = generateMiniGameNumber();
    const miniGame = new MiniGame(randomNumber);
    const result = miniGame.playNumberGame(number);

    if (result) this.#addProbability(50);

    return { answer: randomNumber, result: result };
  }
}

module.exports = UpgradeGame;
