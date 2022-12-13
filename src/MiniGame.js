const generateMiniGameNumber = require("./generateMiniGameNumber");

class MiniGame {
  #answer;

  constructor() {
    this.#answer = generateMiniGameNumber();
  }

  playNumberGame(number) {
    return this.#answer === number;
  }

  playOddGame(command) {
    if (command === "O") return this.#answer % 2 === 1;
    if (command === "E") return this.#answer % 2 === 0;
  }
}

module.exports = MiniGame;
