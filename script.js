let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) {
  if (Math.abs(target - humanGuess) <= Math.abs(target - computerGuess)) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore = humanScore + 1;
  } else if (winner === "computer") {
    computerScore = computerScore + 1;
  }
}

function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
}

console.log(generateTarget());
