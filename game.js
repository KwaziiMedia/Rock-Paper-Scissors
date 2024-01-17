"use strict";

// Initialize player and computer points
let playerPoints = 0;
let computerPoints = 0;

// Display welcome message
console.log("Welcome, best of 5 wins!");

// Variable to track game over status
let gameOver = false;

// Main game loop
while (!gameOver) {
    // Execute one round of the game
    round();
    
    // Check if the game is over
    gameOver = checkGameOver();
}

// Function to check if the game is over
function checkGameOver() {
    if (playerPoints >= 3) {
        console.log(`Congratulations! You won! ${playerPoints} - ${computerPoints}`);
        return true;
    } else if (computerPoints >= 3) {
        console.log(`Commiserations. You lost...! ${computerPoints} - ${playerPoints}`);
        return true;
    } else {
        return false;
    }
}

// Function to handle a single round of the game
function playRound(playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection}`);
    console.log(`Your opponent selected ${computerSelection}`);

    // Check for a draw
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }

    // Determine the winner of the round
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playerPoints++;
                return "You win!";
            } else {
                computerPoints++;
                return "You lose...";
            }
        case "scissors":
            if (computerSelection === "paper") {
                playerPoints++;
                return "You win!";
            } else {
                computerPoints++;
                return "You lose...";
            }
        case "paper":
            if (computerSelection === "rock") {
                playerPoints++;
                return "You win!";
            } else {
                computerPoints++;
                return "You lose...";
            }
    }
}

// Function to execute a round of the game
function round() {
    // Get player and computer selections
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerSelection();

    // Play the round and display the result
    console.log(playRound(playerSelection, computerSelection));
}

// Function to get a random computer selection
function getComputerSelection() {
    let selection = Math.floor(Math.random() * 3) + 1;
    if (selection === 1) return "rock";
    if (selection === 2) return "paper";
    if (selection === 3) return "scissors";
}

// Function to get player selection from user input
function getPlayerSelection() {
    while (true) {
        let input = prompt();
        input = input.toLowerCase();
        if (input === "rock" || input === "paper" || input === "scissors") {
            return input;
        } else {
            console.log("Invalid input. Please enter rock, paper, or scissors");
        }
    }
}
