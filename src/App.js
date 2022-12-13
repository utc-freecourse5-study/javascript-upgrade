const InputView = require("./InputView");
const OutputView = require("./OutputView");
const UpgradeGame = require("./UpgradeGame");

class App {
  #UpgradeGame;

  play() {
    OutputView.printOpening();
    this.#UpgradeGame = new UpgradeGame();
  }

  requestChallengeCommand() {
    InputView.readChallengeCommand((command) => {});
  }
}

module.exports = App;
