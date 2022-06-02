// Create a function declaration that will get me the random integer
let random = (min, max) => Math.floor(Math.random() * (max - min) + min);
// console.log(random(1,4));

// Then declare the dict that you'll call using keys
let dict = {1:"ROCK", 2:"PAPER", 3:"SCISSORS"};

// Create the function where the computer makes the quess
function computerPlay() {
    return dict[random(1,4)]
}
let computerSelection = computerPlay();
let playerSelection = prompt("Make your choice: ");

function gamePlay(playerSelection, computerSelection) {
    // Conditions where the human player wins
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
    playerSelection == "PAPER" && computerSelection == "ROCK" ||
    playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        alert(`You win, ${playerSelection} beats ${computerSelection}`);
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS" ||
    computerSelection == "PAPER" && computerSelection == "ROCK" ||
    computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        alert(`You lose, ${computerSelection} beats ${playerSelection}`);
    } 
}
gamePlay(playerSelection.toUpperCase(), computerSelection);