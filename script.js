function getComputerChoice() {  
    let computerChoice = Math.random();
    // log just to be sure it works
    console.log(computerChoice);
    //determine which response will be returned
    if (computerChoice < 0.34) {
        return("rock");
    } else if (computerChoice <= 0.67) {
        return("paper");
    } else {
        return("scissors");
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