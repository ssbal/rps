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
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    console.log('You Lose! Paper beats Rock.');
    winner = 'c';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('You Win! Paper beats Rock.');
    winner = 'p';
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    console.log('You Lose! Rock beats Scissors.');
    winner = 'c';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You Win! Rock beats Scissors.');
    winner = 'p';
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    console.log('You Lose! Scissors beat Paper.');
    winner = 'c';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You Win! Scissors beat Paper.');
    winner = 'p';
  }

  return winner;
}

function game() {
  let playerScore = 0, computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Make a choice').trim().toLowerCase();
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);
    if (result === null) continue;
    else if (result === 'p') playerScore += 1;
    else if (result === 'c') computerScore += 1;
  }

  console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

  let winner = getWinner(playerScore, computerScore);

  console.log(winner);
}

function getWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return 'You have won!';
  } else if (playerScore < computerScore) {
    return 'You have lost the game!';
  } else if (playerScore === computerScore) {
    return 'Game is draw!';
  }
}

game();