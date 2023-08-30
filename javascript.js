let playerWinCount = 0;
let computerWinCount = 0;
let userSelection = "";
let playerDiv = null;
let computerDiv = null;


function getComputerChoice() {
    const randomNumChoice = Math.floor(Math.random() * 3);
    if (randomNumChoice === 1) {
        return "rock";
    }
    else if (randomNumChoice === 2) {
        return "paper";
    }
    else if (randomNumChoice === 0) {
        return "scissors";
    }
}


// Rock beats Scissors, Scissors beats paper, paper beats Rock
function determineWinner() {
    const computerValue = getComputerChoice();
    // check if player won
    if ((userSelection === "rock" && computerValue === "scissors") || (userSelection === "scissors" && computerValue === "paper") || (userSelection === "paper" && computerValue === "rock")) {
        playerWinCount++;
        if (checkScoreLimit()) {
            return;
        }
        displayRoundResults();
        return;
    } 
    // check for a tie
    else if (userSelection === computerValue) {
        displayRoundResults();
        return;
    }
    // player lost
    else {
        computerWinCount++;
        if (checkScoreLimit()) {
            return;
        }
        displayRoundResults();
        return;
    }
}


const createButton = (...idValue) => {
    const container = document.getElementById('container');
    for (let arg of idValue) {
        const btn = document.createElement('button');
        btn.setAttribute('id', arg);
        btn.textContent = arg;
        //btn.addEventListener('click', function(e) {playRound(e.target.id);});
        btn.addEventListener('click', function(e) {
        setUserSelection(e.target.id)});
        container.appendChild(btn);
    }
}

const setUserSelection = (selection) => {
    userSelection = selection;
    determineWinner();
}


const checkScoreLimit = () => {
    if ((playerWinCount >= 5) || (computerWinCount >= 5 )) {
        displayRoundResults();
        displayGameWinner(determineGameWinner());
        return true;
    }
    else return false;
}

const determineGameWinner = () => {
    if (playerWinCount > computerWinCount) {
        return true;
    }
    else if (computerWinCount > playerWinCount) {
        return false;
    }
}

const displayGameWinner = (winnerBinary) => {
    const winnerDiv = document.createElement('div');
    const results = document.querySelector('#results');
    if (winnerBinary) {
        winnerDiv.textContent = "You won the game";
    }
    else {
        winnerDiv.textContent = "You lost the game";
    }
    results.appendChild(winnerDiv);
}

const addDisplayElements = () => {
    if (document.querySelector('.player') ===  null) {
        const results = document.querySelector('#results');
        playerDiv = document.createElement('div');
        computerDiv = document.createElement('div');
        playerDiv.setAttribute('class', 'player');
        results.appendChild(playerDiv);
        results.appendChild(computerDiv);
    }
}

const displayRoundResults = () => {
    addDisplayElements();
    playerDiv.textContent = "Player Wins: " + playerWinCount;
    computerDiv.textContent = "Computer Wins: " + computerWinCount;
    //if (document.querySelector('.player') !==  null)
}
window.onload = function() {createButton('rock', 'paper', 'scissors')};
