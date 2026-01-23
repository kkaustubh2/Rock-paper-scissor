let humanScore = 0;
let computerScore = 0;

function getPlayerChoice() {
    const userEntry = parseInt(
        prompt("Enter number: 1 (Rock), 2 (Paper), 3 (Scissors)"),
    );

    if (userEntry === 1) {
        console.log("User chose Rock");
        return 1;
    } else if (userEntry === 2) {
        console.log("User chose Paper");
        return 2;
    } else if (userEntry === 3) {
        console.log("User chose Scissors");
        return 3;
    } else {
        console.log("Invalid input");
        return null;
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        console.log("Computer chose Rock");
    } else if (randomNumber === 2) {
        console.log("Computer chose Paper");
    } else {
        console.log("Computer chose Scissors");
    }

    return randomNumber;
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (
        (userChoice === 1 && computerChoice === 3) ||
        (userChoice === 2 && computerChoice === 1) ||
        (userChoice === 3 && computerChoice === 2)
    ) {
        humanScore++;
        console.log("You win this round!");
    } else {
        computerScore++;
        console.log("You lose this round!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const userChoice = getPlayerChoice();
        if (userChoice === null) {
            console.log("Round skipped");
            continue;
        }

        const computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
    }

    console.log("Final Score:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("Game tied!");
    }
}

playGame();
