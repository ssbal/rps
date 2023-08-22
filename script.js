function getComputerChoice() {
  let choice = parseInt(Math.random() * 3) + 1;

  if (choice === 1) return 'rock';
  else if (choice === 2) return 'paper';
  else if (choice === 3) return 'scissors';
}

function playRound(playerSelection, computerSelection) {
  let playerScore = 0, computerScore = 0;

  if (playerSelection === computerSelection) {
    console.log('Try again!');
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    computerScore += 1;
    console.log('You Lose! Paper beats Rock.');
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore += 1;
    console.log('You Win! Paper beats Rock.');
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    computerScore += 1;
    console.log('You Lose! Rock beats Scissors.');
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore += 1;
    console.log('You Win! Rock beats Scissors.');
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    computerScore += 1;
    console.log('You Lose! Scissors beat Paper.');
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore += 1;
    console.log('You Win! Scissors beat Paper.');
  }
}

