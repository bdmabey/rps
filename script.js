function computerPlay() {
    let stance = ["rock", "paper", "scissors"];
    let computerHand = stance[Math.floor(Math.random()*stance.length)];

    return computerHand;
}

function playRound(playerSelection, computerSelection) {
    let loss = 0;
    let win = 1;
    let draw = 2;

    switch (true) {
        case playerSelection.toLowerCase() == "rock" && computerSelection == "scissors":
        case playerSelection.toLowerCase() == "paper" && computerSelection == "rock":
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "paper":
            return win;
        case playerSelection.toLowerCase() == "rock" && computerSelection == "paper":
        case playerSelection.toLowerCase() == "paper" && computerSelection == "scissors":
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "rock":
            return loss;
        default:
            return draw;
    }
}

function game() {
    let timesToLoop = parseInt(prompt("Enter how many rounds you want to play."));
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 1; i <= timesToLoop; i++) {
        let playerSelection = prompt("Please enter rock, paper, or scissors.");
        let computerSelection = computerPlay();
        switch (playRound(playerSelection, computerSelection)) {
            case 0:
                computerPoints += 1;
                break;
            case 1:
                playerPoints += 1;
                break;
            case 2:
                break;
        }
    }
    if (playerPoints > computerPoints) {
        console.log("You won the game!");
    } else if (computerPoints > playerPoints) {
        console.log("You lost the game.");
    } else {
        console.log("You two tied.");
    }
}