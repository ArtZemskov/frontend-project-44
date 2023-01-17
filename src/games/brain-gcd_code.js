import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let num3;
  if (num2 !== 0) {
    num3 = num1 % num2;
    return gcd(num2, num3);
  }
  return num1;
};

const gameLogic = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

const runGcd = () => {
  startGame(description, gameLogic);
};
export default runGcd;
