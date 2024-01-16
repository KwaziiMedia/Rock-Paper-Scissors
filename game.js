console.log("Hello world!")

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock"
const computerSelection = getComputerSelection

console.log(computerSelection)

function getComputerSelection() {
    var selection = Math.floor(Math.random(2))
    if (selection === 0) return "rock"
    if (selection === 1) return "paper"
    if (selection === 2) return "scissors"
}

