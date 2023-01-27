function getComputerChoice() {
    let random = math.floor((math.random() * 3) + 1);
    console.log(random);
    if (random = 1) {
        console.log("rock");
    } else if (random = 2) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}
getComputerChoice();