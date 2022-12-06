const Validation = {
  isTryChallenge(selectChallenge) {
    if (selectChallenge === 'Y' || selectChallenge === 'N') return true;
    throw new Error('도전은 Y, 중단은 N을 입력해주세요');
  },
};

module.exports = Validation;
