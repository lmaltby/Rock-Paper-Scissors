function getComputerChoice() {  
    let computerChoice = Math.random();
    //determine which response will be returned
    if (computerChoice < 0.34) {
        console.log("Rock");
        return "Rock";
    } else if (computerChoice <= 0.67) {
        console.log("Paper");
        return "Paper";
    } else {
        console.log("Scissors");
        return "Scissors";
    }
}

function playRound(computerSelection, playerSelection) {
// determine who wins 
// starting with player losses
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You lose! Rock beats Scissors";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You lose! Scissors beats Paper";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You lose! Paper beats Rock";
// now for player wins
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return "You win! Paper beats Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        return "You win! Scissors beats Paper";
    }  else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return "You win! Rock beats Scissors";
// now for ties
    } else if (computerSelection === "Rock" && playerSelection === "Rock") {
        return "It's a tie!";
    }   else if (computerSelection === "Paper" && playerSelection === "Paper") {
        return "It's a tie!";
    } else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
        return "It's a tie!";
    }    
}

const computerSelection = getComputerChoice();
const playerInput = prompt("Rock, Paper, or Scissors?");
const playerLower = playerInput.toLowerCase();
const playerSelection = playerLower.charAt(0).toUpperCase() + playerLower.slice(1);
console.log(playRound(computerSelection, playerSelection));