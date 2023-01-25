import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNum, step) => {
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 10);
  const progression = getProgression(firstNum, step);
  const randomSpace = getRandomNumber(1, 8);
  const correctAnswer = String(progression[randomSpace]);
  progression[randomSpace] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgression = () => {
  startGame(description, getQuestionAndAnswer);
};
export default runProgression;
