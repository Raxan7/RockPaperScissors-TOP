const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");


const resultsDiv = document.querySelector(".results.scores");
const playerSide = document.createElement('div');
playerSide.classList.add('score');
playerSide.textContent = 0;
resultsDiv.appendChild(playerSide);
const computerSide = document.createElement('div');
computerSide.classList.add('score');
computerSide.textContent = 0;
resultsDiv.appendChild(computerSide);

const winnerDiv = document.querySelector(".winner");


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
// let computerSelection = computerPlay();
// let playerSelection;

btnRock.addEventListener('click', (e) => gamePlay(e.target.textContent, computerPlay()));
btnPaper.addEventListener('click', (e) => gamePlay(e.target.textContent, computerPlay()));
btnScissors.addEventListener('click', (e) => gamePlay(e.target.textContent, computerPlay()));

function gamePlay(playerSelection, computerSelection) {
    // Conditions where the human player wins
    console.log(computerSelection);
    if (playerScore === 5 || computerScore === 5) {
        getWinner(computerScore, playerScore);
    } else {
        if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
            playerScore++;
            console.log(`the playerScore is ${playerScore}`);
            console.log(`the computerScore is ${computerScore}`);
            playerSide.textContent = playerScore;
            console.log(`You win, ${playerSelection} beats ${computerSelection}`);
        // Conditions where the the computer wins
        } else if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER")) {
            computerScore++;
            console.log(`the computerScore is ${computerScore}`);
            console.log(`the PlayerScore is ${playerScore}`);
            computerSide.textContent = computerScore;
            console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
        } else if (playerSelection === computerSelection) {
            console.log(`The game was a tie, the computer's guess was ${computerSelection} amd your guess was 
            ${playerSelection}. Go again!`)
        } else {
            console.log(`I don't understand you! Please follow the rules of the game!. Your guess was
            ${playerSelection} and the computer's was ${computerSelection}`)
        }
    }
}

function getWinner(computerScore, playerScore) {
    if (computerScore === 5) {
        winner = "The computer wins";
    } else if (playerScore === 5) {
        winner = "The human player prevails!!!";
    }
    btnPaper.click();
    winnerDiv.textContent = winner;
    winnerDiv.classList.add('victorious');
}
