const MissionUtils = require('@woowacourse/mission-utils');
const UpgradeModel = require('../src/model/UpgradeModel');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('UpgradeModel Test', () => {
  describe('사용자의 입력값에 따라 홀짝을 맞췄는지 여부 Test', () => {
    test('사용자의 입력값이 O일때 홀짝을 맞춘경우 test', () => {
      const upgradeModel = new UpgradeModel();
      mockRandoms([77]);

      upgradeModel.makeRandomNumber();

      const result = upgradeModel.isOddAndEven('O');
      expect(result).toBeTruthy();
    });

    test('사용자의 입력값이 O일때 홀짝을 틀린경우 test', () => {
      const upgradeModel = new UpgradeModel();
      mockRandoms([77]);

      upgradeModel.makeRandomNumber();

      const result = upgradeModel.isOddAndEven('E');
      expect(result).toBeFalsy();
    });

    test('사용자의 입력값이 E일때 홀짝을 맞춘경우 test', () => {
      const upgradeModel = new UpgradeModel();
      mockRandoms([76]);

      upgradeModel.makeRandomNumber();

      const result = upgradeModel.isOddAndEven('E');
      expect(result).toBeTruthy();
    });

    test('사용자의 입력값이 E일때 홀짝을 틀린경우 test', () => {
      const upgradeModel = new UpgradeModel();
      mockRandoms([76]);

      upgradeModel.makeRandomNumber();

      const result = upgradeModel.isOddAndEven('O');
      expect(result).toBeFalsy();
    });
  });
});
