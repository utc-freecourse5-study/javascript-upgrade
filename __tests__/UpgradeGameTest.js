const MissionUtils = require("@woowacourse/mission-utils");
const UpgradeGame = require("../src/domain/UpgradeGame");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("업그레이드 게임 테스트", () => {
  test("레벨 가져오기 테스트", () => {
    mockRandoms([0, 0]);

    const upgradeGame = new UpgradeGame();
    const zeroUpgrade = upgradeGame.getLevel();

    upgradeGame.upgrade();
    upgradeGame.upgrade();
    const twoUpgrade = upgradeGame.getLevel();

    expect(zeroUpgrade).toEqual(0);
    expect(twoUpgrade).toEqual(2);
  });

  test("업그레이드 성공 테스트", () => {
    mockRandoms([0]);

    const upgradeGame = new UpgradeGame();
    const { isSuccess } = upgradeGame.upgrade();

    expect(isSuccess).toBeTruthy();
  });

  test("업그레이드 실패 테스트", () => {
    mockRandoms([99]);

    const upgradeGame = new UpgradeGame();
    const { isSuccess } = upgradeGame.upgrade();

    expect(isSuccess).toBeFalsy();
  });

  test("홀짝 맞추기 미니 게임 테스트", () => {
    mockRandoms([2, 2]);

    const upgradeGame = new UpgradeGame();
    const { result: firstResultIsEven } = upgradeGame.playOddGame("E");
    const { result: secondResultIsOdd } = upgradeGame.playOddGame("O");

    expect(firstResultIsEven).toBeTruthy();
    expect(secondResultIsOdd).toBeFalsy();
  });

  test("숫자 맞추기 미니 게임 테스트", () => {
    mockRandoms([2, 5]);

    const upgradeGame = new UpgradeGame();
    const { result: firstResultIsEven } = upgradeGame.playNumberGame("2");
    const { result: secondResultIsOdd } = upgradeGame.playNumberGame("4");

    expect(firstResultIsEven).toBeTruthy();
    expect(secondResultIsOdd).toBeFalsy();
  });
});
