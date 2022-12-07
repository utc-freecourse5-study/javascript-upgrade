const INPUT_VALUE = Object.freeze({
  odd: 'O',
  even: 'E',
  challenge: 'Y',
});

const GAME_TYPE = Object.freeze({
  oddAndEven: '홀/짝',
  number: '숫자',
});

const BONUS_PROBABILITY = Object.freeze({
  oddAndEvenSuccess: 10,
  numberSuccess: 50,
  fail: 0,
});

const GAME_RESULT = Object.freeze({
  success: '성공',
  fail: '실패',
});

const UPGRADE_PROBABILITY = Object.freeze([80, 70, 60, 50, 45, 40, 35, 30, 20, 10]);

module.exports = {
  INPUT_VALUE,
  GAME_TYPE,
  BONUS_PROBABILITY,
  GAME_RESULT,
  UPGRADE_PROBABILITY,
};
