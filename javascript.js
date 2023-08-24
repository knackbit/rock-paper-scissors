/* 
Rock paper scissors game.


Take input from user: choice of (rock, paper, scissors) and store the selection.
turn player selection case insensitive
If player selection is valid:
    continue
else:
    display error and ask for a valid selection
Generate a computer choice of rock, paper, scissors randomly and store the selection.

Function to play one round and compare the player and computer selection, then return if the player won or lost the round.

game() function that will use the previous one round function to play a 5 round game that keeps score and reports a winner or loser

*/

// gets computer choice randomly of Rock, Paper, Scissors and returns the name value as a string

function getComputerChoice() {
    const randomNumChoice = Math.floor(Math.random() * 3);
    if (randomNumChoice === 1) {
        return "rock"
    }
    else if (randomNumChoice === 2) {
        return "paper"
    }
    else if (randomNumChoice === 0) {
        return "scissors"
    }
}

// prompt for player choice of Rock paper scissors, if it's valid return the value
function playerSelection() {
    while (true) {
        let rawPlayerSelection = prompt("Choose Rock, Paper, or Scissors: ");
        let lowerPlayerSelection = rawPlayerSelection.toLowerCase();
        if (lowerPlayerSelection === "rock" || lowerPlayerSelection === "paper" || lowerPlayerSelection === "scissors") {
            return lowerPlayerSelection;
        }
        else {
            console.log("Invalid choice");
            continue;
        }
    }
}
// Rock beats Scissors, Scissors beats paper, paper beats Rock
function playRound() {
    const playerValue = playerSelection();
    const computerValue = getComputerChoice();
    // check if player won
    if ((playerValue === "rock" && computerValue === "scissors") || (playerValue === "scissors" && computerValue === "paper") || (playerValue === "paper" && computerValue === "rock")) {
        return 1
    } 
    // check for a tie
    else if (playerValue === computerValue) {
        return 0
    }
    // player lost
    else {
        return -1
    }
}
//  play 5 rounds, keeps score, and then determines winner at the end
function game() {
    let score = 0;
    // loop through game 5 times
    for (let i = 0; i < 5; i++) {
        let roundScore = playRound();
        score += roundScore;
        if (roundScore === 1) {
            console.log("You won the Round!");
        }
        else if (roundScore === 0) {
            console.log("You Tied.");
        }
        else if (roundScore === -1) {
            console.log("You lost the Round!");
        }
    }
    if (score > 0) {
        console.log("Congratulations.  You won the game!!!");
    }
    else if (score === 0) {
        console.log("You tied");
    }
    else if (score < 0) {
        console.log("Sorry.  You lost the game.")
    }
}

game();