"use strict";
let playerPoints = 0;
let computerPoints = 0;

/*console.log("Would you like to play best of: 3, 5 or 7?")
let maxRounds = prompt();*/

let gameOver = false;

while (!gameOver) {
    round();
    checkGameOver();
}

function checkGameOver() {
    if (playerPoints >= 3) {
        console.log(`Congratulations! You won! ${playerPoints} - ${computerPoints}`);
        return true;
    }
    if (computerPoints >= 3) {
        console.log(`Comiserations. You lost...! ${computerPoints} - ${playerPoints}`);
        return true;
    }

}

function playRound(playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection}`);
    console.log(`Your opponent selected ${getComputerSelection()}`);

    if (playerSelection === computerSelection) {
        return "It's a draw!"
    }

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playerPoints++;
                return "You win!";
            }
            else {
                computerPoints++;
                return "You lose...";
            }
        case "scissors":
            if (computerSelection === "paper") {
                playerPoints++;
                return "You win!";
            }
            else {
                computerPoints++;
                return "You lose...";
            }

        case "paper":
            if (computerSelection === "rock") {
                playerPoints++;
                return "You win!";
            }
            else {
                computerPoints++;
                return "You lose...";
            }
    }
}

function round() {
    let playerSelection = "rock"
    let computerSelection = getComputerSelection();

    console.log(playRound(playerSelection, computerSelection))
}

function getComputerSelection() {
    let selection = Math.floor(Math.random() * 3) + 1
    if (selection === 1) return "rock"
    if (selection === 2) return "paper"
    if (selection === 3) return "scissors"
}

