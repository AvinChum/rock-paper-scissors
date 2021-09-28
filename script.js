

function computerPlay () {
    let computerPick = Math.floor(Math.random()* 3) + 1;

    switch(computerPick) {
        case computerPick = 1:
            return "Rock";
            break;

        case computerPick = 2:
            return "Paper";
            break;

        case computerPick = 3:
            return "Scissors";
            break;
    }
}


function userPlay () {
    let userPlay1 = prompt("Please pick your choice. Rock, Paper or Scissors").charAt(0).toLowerCase()
    return userPlay1
}


function playRound (playerSelection, computerSelection) {
     let playerpick1 = playerSelection
     playerSelection.charAt(0).toUpperCase()
    if (playerpick1 === computerSelection) {
        return "It's a Tie." 
    }
    else if (playerpick1=== "rock" && computerSelection === "scissors" ) {
        return "You win, Rock beats Scissors!"
    }
    else if (playerpick1 === "scissors" && computerSelection === "paper") {
        return "You win, Scissors beats Paper."
    }
    else if (playerpick1 === "paper" && computerSelection === "scissors") {
        return "You win, Paper beats Scissors."
    }
    else if (playerpick1 === "paper" && computerSelection === "scissors") {
        return "You lose, Scissors beats Paper."
    }
    else if (playerpick1 === "scissors" && computerSelection === "rock") {
        return "You lose, Rock beats Scissors."
    } else if (playerpick1 === "rock" && computerSelection === "paper") {
        return "You lose, Paper beats Rock"
    }
}
console.log(playRound("rock", "paper"))
