let playerWinCount = 0;
let computerWinCount = 0;
let userSelection = "";


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
        console.log('you won');
        return 1;
    } 
    // check for a tie
    else if (userSelection === computerValue) {
        return 0;
    }
    // player lost
    else {
        computerWinCount++;
        console.log('you lost');
        return -1;
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
        btn.addEventListener('click', determineWinner);
        btn.addEventListener('click', checkScoreLimit);
        container.appendChild(btn);
    }
}

const setUserSelection = (selection) => {
    userSelection = selection;
}


const checkScoreLimit = () => {
    if ((playerWinCount >= 5) || (computerWinCount >= 5 )) {
        displayGameWinner(determineGameWinner());
    }
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
    const results = document.querySelector('#results');
    if (winnerBinary) {
        results.textContent = "You won the game";
    }
    else {
        results.textContent = "You lost the game";
    }

}
window.onload = function() {createButton('rock', 'paper', 'scissors')};
