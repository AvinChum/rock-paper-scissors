let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let computerPick = Math.floor(Math.random()* 3) + 1;
    if (computerPick === 1) {
        return "rock"
    }else if (computerPick === 2) {
        return "paper"
    }else {
        return "scissors"
    }
}

function userPlay(){
    let userPick = prompt("Please choose either rock, paper or scissors. ").toLowerCase();
    return userPick
}
// will need to find a way to correct this  function in case the user inputs an invalid choice without using
// a turn in the game() function.
 function playRound (playerSelection, computerSelection) {

     if (playerSelection === computerSelection) {
        return "Its a Tie"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors")  {
         playerScore++
         return `You Win, Rock beats Scissors. You have ${playerScore} points and the computer has ${computerScore}.` 
     } 
    else if (playerSelection === "scissors" && computerSelection === "rock") {
         computerScore++
         return `You lose, Rock beats Scissors. You have ${playerScore} points and the computer has ${computerScore}.`
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return `You win, Paper beats Rock. You have ${playerScore} points and the computer has ${computerScore}.`
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return `You lose Paper beats Rock. You have ${playerScore} points and the computer has ${computerScore}.`
    }
   else if (playerSelection === "scissors" && computerSelection === "paper" ){
        playerScore++
        return `You win! Scissors beats Paper. You have ${playerScore} points and the computer has ${computerScore}.`
    } 
    else if (playerSelection === "paper" && computerSelection == "scissors") {
        computerScore++
        return `You Lose Scissors beats Paper. You have ${playerScore} points and the computer has ${computerScore}.`
    }
    else {
        return "Please pick a valid choice: rock, paper or scissors."
    }
 }

 
function game () {
    let round;
    for(round = 1; round <= 5; round++) {
        console.log(playRound(userPlay(),computerPlay())) 
        console.log(round)  
        }
}

