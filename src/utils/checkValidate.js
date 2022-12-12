const OutputView = require('../view/OutputView');

checkValidate = (validate, input) => {
  try {
    validate(input);
  } catch (error) {
    OutputView.printErrorMessage(error);
    return false;
  }
  return true;
};

module.exports = checkValidate;
