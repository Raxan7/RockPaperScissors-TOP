// Global variables
let computerScore = 0;
let playerScore = 0;

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

function game() {
    function gamePlay(playerSelection, computerSelection) {
        // Conditions where the human player wins
        if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            playerScore++;
            console.log(`You win, ${playerSelection} beats ${computerSelection}`);
        // Conditions where the the computer wins
        } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS" ||
        computerSelection == "PAPER" && playerSelection == "ROCK" ||
        computerSelection == "SCISSORS" && playerSelection == "PAPER") {
            computerScore++;
            console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
        } else if (playerSelection === computerSelection) {
            console.log(`The game was a tie, the computer's guess was ${computerSelection} amd your guess was 
            ${playerSelection}. Go again!`)
        } else {
            console.log(`I don't understand you! Please follow the rules of the game!. Your guess was
            ${playerSelection} and the computer's was ${computerSelection}`)
        }
    }
    return gamePlay(playerSelection.toUpperCase(), computerSelection);
}

let round = 1;
console.log(`You have made ${round} try already`);
console.log('The player score is ' + playerScore);
console.log('The computer score is ' + computerScore);
while (computerScore < 5 && playerScore < 5) {
    game();
    playerSelection = prompt("Second selection:");
    computerSelection = computerPlay();
    console.log(`You have made ${round + 1} tries already`);
    console.log("The player score is " + playerScore);
    console.log("The computer score is " + computerScore);
    getWinner(computerScore, playerScore);
    round++;
}

function getWinner(computerScore, playerScore) {
    (computerScore == 5) ? console.log("The computer wins") : console.log("The human player wins")
}
