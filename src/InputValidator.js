const InputValidator = {
  validateChallengeInput(input) {
    if (input !== "Y" && input !== "N") {
      throw new Error("[ERROR] 도전 여부 명령어는 Y 혹은 N을 입력해야 합니다.");
    }
  },

  validateMiniGameInput(input) {
    if (!isNaN(input) && (Number(input) < 0 || Number(input) > 9)) {
      throw new Error("[ERROR] 숫자 맞추기 게임은 0~9 사이의 값을 입력해야 합니다.");
    }
    if (input !== "O" && input !== "E") {
      throw new Error("[ERROR] 홀/짝 맞추기 게임은 O 혹은 E를 입력해야 합니다.");
    }
  },
};

module.exports = InputValidator;
