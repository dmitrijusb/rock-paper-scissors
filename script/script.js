// Function to get random choice out of 3
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play one round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection) return "It's a Tie!";
  // Player wins logic
  else if (playerSelection == "rock" && computerSelection == "scissors")
    return "You Won! Rock beats Scissors";
  else if (playerSelection == "paper" && computerSelection == "rock")
    return "You Won! Paper beats Rock";
  else if (playerSelection == "scissors" && computerSelection == "paper")
    return "You Won! Scissors beats Paper";
  // Computer wins logic
  else if (computerSelection == "rock" && playerSelection == "scissors")
    return "You Lost! Rock beats Scissors";
  else if (computerSelection == "paper" && playerSelection == "rock")
    return "You Lost! Paper beats Rock";
  else if (computerSelection == "scissors" && playerSelection == "paper")
    return "You Lost! Scissors beats Paper";
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
    console.log(`You've lost all 5 games!`);
  }
}

game();
