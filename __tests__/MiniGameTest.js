const MiniGame = require("../src/domain/MiniGame");

describe("미니 게임 테스트", () => {
  test("숫자 맞추기 미니 게임 테스트", () => {
    const miniGame = new MiniGame(2);

    const fistResult = miniGame.playNumberGame("2");
    const secondResult = miniGame.playNumberGame("3");

    expect(fistResult).toBeTruthy();
    expect(secondResult).toBeFalsy();
  });

  test("홀짝 맞추기 미니 게임 테스트", () => {
    const miniGame = new MiniGame(5);

    const fistResult = miniGame.playOddGame("O");
    const secondResult = miniGame.playOddGame("E");

    expect(fistResult).toBeTruthy();
    expect(secondResult).toBeFalsy();
  });
});
