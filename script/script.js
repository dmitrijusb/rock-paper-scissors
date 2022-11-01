///////////////////////////////////////////////////
//
//
//
//
// //Variables
const choices = ["Rock", "Paper", "Scissors"];
let scores = { player: 0, computer: 0 };
console.log(scores.player);

const [playerImage, computerImage] = document.querySelectorAll(".images");
const [playerScoreText, computerScoreText] =
  document.querySelectorAll(".score");
const buttons = document.querySelectorAll("button");
let textBox = document.querySelector(".game-text");

// Function to get random choice out of 3
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play one round
function playRound(e) {
  if (!checkWinner()) {
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.textContent;

    // Player wins logic
    if (
      (playerSelection == "Rock" && computerSelection == "Scissors") ||
      (playerSelection == "Paper" && computerSelection == "Rock") ||
      (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
      textBox.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
      scores.player += 1;
      playerScoreText.textContent = scores.player;
    }

    // Computer wins logic
    else if (
      (computerSelection == "Rock" && playerSelection == "Scissors") ||
      (computerSelection == "Paper" && playerSelection == "Rock") ||
      (computerSelection == "Scissors" && playerSelection == "Paper")
    ) {
      textBox.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`;
      scores.computer += 1;
      computerScoreText.textContent = scores.computer;
    } else textBox.textContent = "It's a Tie!";

    //Showing images for each choice
    playerImage.classList.add("mirror-image");
    playerImage.src = `images/${playerSelection}.svg`;
    computerImage.src = `images/${computerSelection}.svg`;
  }
}

//Function to check the winner

function checkWinner() {
  if (scores.player == 5) {
    alert("Player Won");
    return true;
  } else if (scores.computer == 5) {
    alert("Computer won!");
    return true;
  } else return false;
}

// Function to Run 5 games and count wins
function game() {
  let totalGames = 5;
  let counter = 0;
  console.log(`Welcome, let's play ${totalGames} games!`);

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

//////////////////////////////////////////////////////
////////////////////////DOM///////////////////////////
//////////////////////////////////////////////////////

// We can loop through queryselectorall as an array
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playRound);
}

function init() {}
