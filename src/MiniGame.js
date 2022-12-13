const generateMiniGameNumber = require("./generateMiniGameNumber");

class MiniGame {
  #answer;

  constructor() {
    this.#answer = generateMiniGameNumber();
  }

  playNumberGame() {}

  playOddGame() {}
}

module.exports = MiniGame;
