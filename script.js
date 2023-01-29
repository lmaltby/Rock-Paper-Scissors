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
        return "loss";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        console.log("You lose! Scissors beats Paper");
        return "loss";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        console.log("You lose! Paper beats Rock");
        return "loss";
// now for player wins
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        console.log("You win! Paper beats Rock");
        return "win";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        console.log("You win! Scissors beats Paper");
        return "win";
    }  else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        console.log("You win! Rock beats Scissors");
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

function game() {
    let winCounter = 0;
    let lossCounter = 0;
    let computerSelection;
    let playerInput;
    let playerLower;
    let playerSelection;
    let gameCounter; 
// loop 5 times
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerInput = prompt("Rock, Paper, or Scissors?");
        playerLower = playerInput.toLowerCase();
        playerSelection = playerLower.charAt(0).toUpperCase() + playerLower.slice(1);
        gameCounter = playRound(computerSelection, playerSelection);
        if (gameCounter == "win") {
            winCounter++;
        } else if (gameCounter == "loss") {
            lossCounter++;
        }
        playRound(computerSelection, playerSelection);
        console.log(gameCounter);
    }
// this compares wins and losses to determine who wins overall
    if (winCounter > lossCounter) {
            console.log("Victory! You defeated the computer " + winCounter + " to " + lossCounter);
    } else if (lossCounter > winCounter) {
            console.log("Defeat! You lost " + lossCounter + " to " + winCounter);
    } else {
            console.log("...you managed to tie? Nice job");
    }
}
game();