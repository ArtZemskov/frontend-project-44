import startGame from '../src/gameProcess.js';
import getRandomNumber from '../src/randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const gameLogic = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => {
  startGame(description, gameLogic);
};
export default runEven;
