const generateMiniGameNumber = require("./generateMiniGameNumber");
const MiniGame = require("./MiniGame");
const probability = require("./Probability");

class UpgradeGame {
  #level;
  #probability;

  constructor() {
    this.#level = 0;
    this.#probability = probability[this.#level + 1];
  }

  addProbability(probability) {
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

    if (result) this.addProbability(10);

    return { answer: randomNumber, result: result };
  }

  playNumberGame(number) {
    const randomNumber = generateMiniGameNumber();
    const miniGame = new MiniGame(randomNumber);
    const result = miniGame.playNumberGame(number);

    if (result) this.addProbability(50);

    return { answer: randomNumber, result: result };
  }
}

module.exports = UpgradeGame;
