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