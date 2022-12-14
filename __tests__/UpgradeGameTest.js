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
    const zeroUpgrade = upgradeGame.getWeaponLevel();

    upgradeGame.weaponUpgrade();
    upgradeGame.weaponUpgrade();
    const twoUpgrade = upgradeGame.getWeaponLevel();

    expect(zeroUpgrade).toEqual(0);
    expect(twoUpgrade).toEqual(2);
  });

  test("업그레이드 성공 테스트", () => {
    mockRandoms([0]);

    const upgradeGame = new UpgradeGame();
    const { isSuccess } = upgradeGame.weaponUpgrade();

    expect(isSuccess).toBeTruthy();
  });

  test("업그레이드 실패 테스트", () => {
    mockRandoms([99]);

    const upgradeGame = new UpgradeGame();
    const { isSuccess } = upgradeGame.weaponUpgrade();

    expect(isSuccess).toBeFalsy();
  });

  test("홀짝 맞추기 미니 게임 테스트", () => {
    mockRandoms([2, 2]);

    const upgradeGame = new UpgradeGame();
    const { result: firstNumberIsEven } = upgradeGame.playOddGame("E");
    const { result: secondNumberIsOdd } = upgradeGame.playOddGame("O");

    expect(firstNumberIsEven).toBeTruthy();
    expect(secondNumberIsOdd).toBeFalsy();
  });

  test("숫자 맞추기 미니 게임 테스트", () => {
    mockRandoms([2, 5]);

    const upgradeGame = new UpgradeGame();
    const { result: firstNumberIsTwo } = upgradeGame.playNumberGame("2");
    const { result: secondNumberIsFour } = upgradeGame.playNumberGame("4");

    expect(firstNumberIsTwo).toBeTruthy();
    expect(secondNumberIsFour).toBeFalsy();
  });
});
