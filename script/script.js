function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection == "rock" && computerSelection == "scissors")
    return "You won! Rock beats Scissors!";
}

let selection = "Rock";
console.log(playRound(selection, getComputerChoice()));
