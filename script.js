function computerPlay() {
    let stance = ["rock", "paper", "scissors"];
    let computerHand = stance[Math.floor(Math.random()*stance.length)];

    return computerHand;
}

function playRound(playerSelection, computerSelection) {
    let playerTemp = 0;
    let computerTemp = 0;

    switch (true) {
        case (playerSelection.toLowerCase() == "rock") && (computerSelection == "scissors"):
        case (playerSelection.toLowerCase() == "paper") && (computerSelection == "rock"):
        case (playerSelection.toLowerCase() == "scissors") && (computerSelection == "paper"):
            playerTemp = playerScore.textContent;
            playerScore.textContent = +playerTemp + +1;
            break;
        case (playerSelection.toLowerCase() == "rock") && (computerSelection == "paper"):
        case (playerSelection.toLowerCase() == "paper") && (computerSelection == "scissors"):
        case (playerSelection.toLowerCase() == "scissors") && (computerSelection == "rock"):
            computerTemp = computerScore.textContent;
            computerScore.textContent = +computerTemp + +1;
            break;
    }

    if (playerScore.textContent == 5) {
        let win = document.createElement('p');
        win.textContent = "Player wins";
        scoreboard.appendChild(win);
    } else if (computerScore.textContent == 5){
        let loss = document.createElement('p');
        loss.textContent = "Computer wins";
        scoreboard.appendChild(loss);
    }
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("rock", computerPlay()))

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("paper", computerPlay()))

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound("scissors", computerPlay()))

const scoreboard = document.querySelector('#scoreBoard');

let playerScore = document.createElement("h2");
let computerScore = document.createElement("h2");

playerScore.textContent = "0";
computerScore.textContent = "0";


scoreboard.appendChild(playerScore);
scoreboard.appendChild(computerScore);