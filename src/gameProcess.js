const gameProcess = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default gameProcess;
