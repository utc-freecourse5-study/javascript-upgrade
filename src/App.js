const MissionUtils = require("@woowacourse/mission-utils");
const InputValidator = require("./InputValidator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const UpgradeGame = require("./UpgradeGame");

class App {
  #UpgradeGame;

  play() {
    OutputView.printOpening();
    this.#UpgradeGame = new UpgradeGame();
    this.requestChallengeCommand();
  }

  requestChallengeCommand() {
    OutputView.printCurrentLevel(this.#UpgradeGame.getLevel());
    InputView.readChallengeCommand((input) => {
      if (!this.tryValidate(InputValidator.validateChallengeInput, input)) {
        this.requestChallengeCommand();
        return;
      }
      if (input === "Y") this.requestMiniGameInput();
      if (input === "N") this.end();
    });
  }

  requestMiniGameInput() {
    InputView.readMiniGameInput((input) => {
      if (!this.tryValidate(InputValidator.validateMiniGameInput, input)) {
        this.requestMiniGameInput();
        return;
      }
      this.playMiniGame(input);
    });
  }

  playMiniGame(input) {
    if (isNaN(input)) {
      const { answer, result } = this.#UpgradeGame.playOddGame(input);
      OutputView.printOddGameResult(answer, result);
    } else {
      const { answer, result } = this.#UpgradeGame.playNumberGame(input);
      OutputView.printNumberGameResult(answer, result);
    }
    this.upgrade();
  }

  upgrade() {
    const { isSuccess, probability } = this.#UpgradeGame.upgrade();
    OutputView.printUpgradeResult(probability, isSuccess);

    if (isSuccess) this.requestChallengeCommand();
    else this.end();
  }

  end() {
    OutputView.printFinalResult(this.#UpgradeGame.getLevel());
    MissionUtils.Console.close();
  }

  tryValidate(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
