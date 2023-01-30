import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let num3;
  if (num2 !== 0) {
    num3 = num1 % num2;
    return getGcd(num2, num3);
  }
  return num1;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

const runGcd = () => {
  startGame(description, getQuestionAndAnswer);
};
export default runGcd;
