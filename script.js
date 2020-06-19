let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
  if (userGuess < 0 || userGuess > 9) {
    alert("The number is out of range");
  }
  if (
    getAbsoluteDistance(userGuess, secretTarget) <=
    getAbsoluteDistance(computerGuess, secretTarget)
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = winner => {
  if (winner === "human") {
    humanScore++;
  } else computerScore++;
};

const advanceRound = () => currentRoundNumber++;
