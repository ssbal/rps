function getComputerChoice() {
  let choice = parseInt(Math.random() * 3) + 1;

  if (choice === 1) return 'rock';
  else if (choice === 2) return 'paper';
  else if (choice === 3) return 'scissors';
}

function playRound(playerSelection, computerSelection) {
  let result = '';
  let winnerOfRound;

  if (playerSelection === computerSelection) {
    return 'Try again!';
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    return 'You Lose! Paper beats Rock.';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats Rock.'
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    return 'You Lose! Rock beats Scissors.';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You Win! Rock beats Scissors.'
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    return 'You Lose! Scissors beat Paper.';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You Win! Scissors beat Paper.'
  }
}

function game() {
  let playerScore = 0, computerScore = 0;


}