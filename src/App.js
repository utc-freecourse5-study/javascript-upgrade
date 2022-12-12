const UpgradeGame = require('./controller/UpgradeGame');

class App {
  constructor() {
    this.upgradeGame = new UpgradeGame();
  }

  play() {
    this.upgradeGame.start();
  }
}
const app = new App();
app.play();

module.exports = App;
