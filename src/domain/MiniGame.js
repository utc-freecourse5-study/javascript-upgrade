class MiniGame {
  #answer;

  constructor(answer) {
    this.#answer = answer;
  }

  playNumberGame(number) {
    return this.#answer === Number(number);
  }

  playOddGame(command) {
    if (command === "O") return this.#answer % 2 === 1;
    if (command === "E") return this.#answer % 2 === 0;
  }
}

module.exports = MiniGame;
