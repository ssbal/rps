const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const scores = document.querySelector('.scores');
let playerScore = 0,
  computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    game(event.target.id);
  });
});

function getComputerChoice() {
  let choice = parseInt(Math.random() * 3) + 1;

  if (choice === 1) return 'rock';
  else if (choice === 2) return 'paper';
  else if (choice === 3) return 'scissors';
}

function playRound(playerSelection, computerSelection) {
  let winner;

  if (playerSelection === computerSelection) {
    winner = null;
    result.textContent = `It's a tie! Try again.`;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    result.textContent = 'You Lose! Paper beats Rock.';
    winner = 'c';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result.textContent = 'You Win! Paper beats Rock.';
    winner = 'p';
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    result.textContent = 'You Lose! Rock beats Scissors.';
    winner = 'c';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result.textContent = 'You Win! Rock beats Scissors.';
    winner = 'p';
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    result.textContent = 'You Lose! Scissors beat Paper.';
    winner = 'c';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result.textContent = 'You Win! Scissors beat Paper.';
    winner = 'p';
  }

  return winner;
}

function game(playerChoice) {
  let playerSelection = playerChoice;
  let computerSelection = getComputerChoice();
  result.classList.remove('winner');

  let gameResult = playRound(playerSelection, computerSelection);
  if (gameResult === null) return;
  else if (gameResult === 'p') playerScore += 1;
  else if (gameResult === 'c') computerScore += 1;

  scores.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    getWinner(playerScore, computerScore);
    playerScore = computerScore = 0;
    result.classList.add('winner');
  }
}

function getWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    result.textContent = 'You have won!';
  } else if (playerScore < computerScore) {
    result.textContent = 'You have lost the game!';
  }
}
