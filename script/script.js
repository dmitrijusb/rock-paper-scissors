// Function to get random choice out of 3
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play one round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  console.log(playerSelection);
  console.log(computerSelection);

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  )
    return true;
}

// Function to Run 5 games and count wins
function game() {
  let totalGames = 5;
  let counter = 0;
  console.log("Welcome, let's play 5 games!");

  for (let index = 0; index < totalGames; index++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Please enter your selection");
    if (playRound(playerSelection, computerSelection)) {
      counter++;
    }
  }

  if (counter > 0)
    console.log(
      `Congratulations, you've won ${counter} out of ${totalGames} games!`
    );
  else {
    console.log(`You've lost all 5 games!`);
  }
}

game();
