let playerScore = 0;
let computerScore = 0;
let round = 0;


function computerPlay() {
    let computerPick = Math.floor(Math.random()* 3) + 1;

    switch(computerPick) {
        case computerPick = 1:
            return "rock";
            break;

        case computerPick = 2:
            return "paper";
            break;

        case computerPick = 3:
            return "scissors";
            break;
    }
}
// user selection. i will need to come back inorder to change the case sensitivity. 
function userPlay(){
    let userPick = prompt("Please choose you weapon. ")
    return userPick
}
// will need to find a way to correct this function in case the user inputs an invalid choice without using
// a turn in the game() function.
 function playRound (playerSelection, computerSelection) {
     computerSelection = computerPlay();
     playerSelection = userPlay();

     if (playerSelection === computerSelection) {
        return "Its a Tie"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors")  {
         playerScore++
         return `You Win, Rock beats Scissors. You have ${playerScore} points` 
     } 
    else if (playerSelection === "scissors" && computerSelection === "rock") {
         computerScore++
         return `You lose, Rock beats Scissors. The computer has a score of ${computerScore}.`
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return `You win, Paper beats Rock. You have a score of ${playerScore}`
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return `You lose Paper beats Rock. The computer has a score of ${computerScore}.`
    }
   else if (playerSelection === "scissors" && computerSelection === "paper" ){
        playerScore++
        return `You win! Scissors beats Paper. You have a score of ${playerScore}`
    } 
    else if (playerSelection === "paper" && computerSelection == "scissors") {
        computerScore++
        return `You Lose Scissors beats Paper. The computer has a score of ${computerScore}.`
    }
    else {
        return "Please pick a valid choice: rock, paper or scissors."
    }
 }

 
function game () {
  console.log(playRound(userPlay,computerPlay))
  console.log(playRound(userPlay,computerPlay))
  console.log(playRound(userPlay,computerPlay))
  console.log(playRound(userPlay,computerPlay))
  console.log(playRound(userPlay,computerPlay))
}
console.log(game())