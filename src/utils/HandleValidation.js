const OutputView = require('../OutputView');

const HandleValidation = {
  checkValidate(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  },
};

module.exports = HandleValidation;
