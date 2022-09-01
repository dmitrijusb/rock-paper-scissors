// Function to get random choice out of 3
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play one round
function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  computerSelection =
    computerSelection[0].toUpperCase() +
    computerSelection.slice(1).toLowerCase();

  // Player wins logic
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  )
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  // Computer wins logic
  else if (
    (computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissors" && playerSelection == "Paper")
  )
    return `You Lost! ${computerSelection} beats ${playerSelection}`;
  else return "It's a Tie!";
}

// Function to Run 5 games and count wins
function game() {
  let totalGames = 5;
  let counter = 0;
  console.log("Welcome, let's play 5 games!");

  for (let index = 0; index < totalGames; index++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Please enter your selection");
    let playGame = playRound(playerSelection, computerSelection);

    if (playGame.includes("Tie")) console.log(playGame);
    else if (playGame.includes("Won")) {
      console.log(playGame);
      counter++;
    } else console.log(playGame);
  }

  if (counter > 0)
    console.log(
      `Congratulations, you've won ${counter} out of ${totalGames} games!`
    );
  else {
    console.log(`You've lost all ${totalGames} games!`);
  }
}
