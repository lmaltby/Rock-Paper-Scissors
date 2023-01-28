function getComputerChoice() {  
    let computerChoice = Math.random();
    //determine which response will be returned
    if (computerChoice < 0.34) {
        console.log("rock");
        return "rock";
    } else if (computerChoice <= 0.67) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}
//call function
getComputerChoice();

// let playerSelection = prompt("Rock, Paper, or Scissors?");

// function play(computerSelection, playerSelection) {
//     if (computerSelection == rock & playerSelection == paper) {
//         console.log("Computer wins!")
//     }
// }