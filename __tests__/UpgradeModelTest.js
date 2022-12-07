const MissionUtils = require('@woowacourse/mission-utils');
const UpgradeModel = require('../src/model/UpgradeModel');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('UpgradeModel Test', () => {
  let upgradeModel;

  beforeEach(() => {
    upgradeModel = new UpgradeModel();
  });

  describe('사용자의 입력값에 따라 홀짝을 맞췄는지 여부 Test', () => {
    test('사용자의 입력값이 O일때 홀짝을 맞춘경우 test', () => {
      mockRandoms([7]);

      upgradeModel.makeRandomNumber();

      const result = upgradeModel.isOddAndEven('O');
      expect(result).toBeTruthy();
    });

    test('사용자의 입력값이 O일때 홀짝을 틀린경우 test', () => {
      mockRandoms([6]);

      upgradeModel.makeRandomNumber();

      const result = upgradeModel.isOddAndEven('O');
      expect(result).toBeFalsy();
    });

    test('사용자의 입력값이 E일때 홀짝을 맞춘경우 test', () => {
      mockRandoms([6]);

      upgradeModel.makeRandomNumber();

      const result = upgradeModel.isOddAndEven('E');
      expect(result).toBeTruthy();
    });

    test('사용자의 입력값이 E일때 홀짝을 틀린경우 test', () => {
      mockRandoms([7]);

      upgradeModel.makeRandomNumber();

      const result = upgradeModel.isOddAndEven('E');
      expect(result).toBeFalsy();
    });
  });

  describe('미니게임의 숫자를 맞췄는지 Test', () => {
    test('미니게임 숫자를 맞춘경우 Test', () => {
      mockRandoms([7]);

      upgradeModel.makeRandomNumber();
      const result = upgradeModel.isCorrectMiniGameNumber(7);
      expect(result).toBeTruthy();
    });

    test('미니게임 숫자를 틀린경우 Test', () => {
      mockRandoms([6]);

      upgradeModel.makeRandomNumber();
      const result = upgradeModel.isCorrectMiniGameNumber(7);
      expect(result).toBeFalsy();
    });
  });

  test('현재 강화 등급 Test', () => {
    upgradeModel.addUpgradePhase();
    upgradeModel.addUpgradePhase();
    upgradeModel.addUpgradePhase();

    const result = upgradeModel.getCurrentUpgradePhase();
    expect(result).toBe(3);
  });
});
