import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';
const collOfOperators = ['+', '-', '*'];

const gameLogic = () => {
  const randomOperator = collOfOperators[Math.floor(Math.random() * collOfOperators.length)];
  const num1 = getRandomNumber(0, 25);
  const num2 = getRandomNumber(0, 25);
  const question = `${num1} ${randomOperator} ${num2}`;
  const calculate = (operator, x, y) => {
    switch (operator) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      default:
        return null;
    }
  };

  const correctAnswer = String(calculate(randomOperator, num1, num2));
  return [question, correctAnswer];
};

const runCalc = () => {
  startGame(description, gameLogic);
};
export default runCalc;