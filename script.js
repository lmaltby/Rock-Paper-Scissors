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
        console.log("You lose! Rock beats Scissors");
        let lossCounter = lossCounter++;
        return "loss";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        console.log("You lose! Scissors beats Paper");
        let lossCounter = lossCounter++;
        return "loss";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        console.log("You lose! Paper beats Rock");
        let lossCounter = lossCounter++;
        return "loss";
// now for player wins
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        console.log("You win! Paper beats Rock");
        let winCounter = winCounter++;
        return "win";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        console.log("You win! Scissors beats Paper");
        let winCounter = winCounter++;
        return "win";
    }  else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        console.log("You win! Rock beats Scissors");
        let winCounter = winCounter++;
        return "win";
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

function game() {
    for (let i = 0; i < 5; i++) {
        let winCounter = 0;
        let lossCounter = 0;
        playRound(computerSelection, playerSelection);
        if (winCounter > lossCounter) {
            console.log("Victory!");
        } else if (lossCounter > winCounter) {
            console.log("Defeat!");
        } else {
            console.log("You...tied somehow?");
        }
    }
}
game();