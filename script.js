let humanScore = 0;
let computerScore = 0;

function getPlayerChoice() {
    let userEntry;
    userEntry = parseInt(
        prompt(`Enter number amongst 1(Rock), 2(Paper), 3(Scissor) `),
    );
    if (userEntry === 1) {
        console.log("User chose rock");
    } else if (userEntry === 2) {
        console.log("User Chose paper");
    } else if (userEntry === 3) {
        console.log("User chose scissors");
    } else {
        console.log("Please enter a valid input");
    }
}

function getComputerChoice() {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        console.log("Computer chose rock");
    } else if (randomNumber === 1) {
        console.log("Computer Chose Paper");
    } else {
        console.log("Computer Chose scissors");
    }
}

getPlayerChoice();
getComputerChoice();
