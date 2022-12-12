const Validation = require('../src/utils/Validation');

describe('유효성 검사', () => {
  test.each(['E', 'n', 'O', '1'])('다리의 길이 예외 테스트', (input) => {
    expect(() => {
      Validation.isTryChallenge(input);
    }).toThrow('[ERROR] 도전은 Y, 중단은 N을 입력해주세요');
  });

  test.each(['-3', '10', 'o', 'e'])('다리의 길이 예외 테스트', (input) => {
    expect(() => {
      Validation.checkMiniGameInput(input);
    }).toThrow(
      '[ERROR] 미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요. (숫자: 0 ~ 9 사이의 수, 홀: O, 짝: E)'
    );
  });
});
