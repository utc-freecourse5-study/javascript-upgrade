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

  playOddGame(command) {
    const randomNumber = generateMiniGameNumber();
    const miniGame = new MiniGame(randomNumber);
    const result = miniGame.playOddGame(command);

    if (result) this.#probability += 10;

    return { answer: randomNumber, result: result };
  }

  playNumberGame(number) {
    const randomNumber = generateMiniGameNumber();
    const miniGame = new MiniGame(randomNumber);
    const result = miniGame.playNumberGame(number);

    if (result) this.#probability += 50;

    return { answer: randomNumber, result: result };
  }
}

module.exports = UpgradeGame;
