import readlineSync from 'readline-sync';
import getRandomNumber from './randomNumber.js';
import gameProcess from './gameProcess.js';

const startEvenGame = (gameProcess) => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description}`);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = gameProcess();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, Bill!`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
export default startEvenGame;
