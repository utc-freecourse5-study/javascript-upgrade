const UpgradeGame = require('./controller/UpgradeGame');

class App {
  #upgradeGame;
  constructor() {
    this.#upgradeGame = new UpgradeGame();
  }
  play() {
    this.#upgradeGame.start();
  }
}
const app = new App();
app.play();

module.exports = App;
