import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => {
  startGame(description, getQuestionAndAnswer);
};
export default runEven;
