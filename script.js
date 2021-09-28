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
function userPlay (){
    let userPick = prompt("Please choose you weapon.")
    return userPick
}
   
 function playRound (playerSelection, computerSelection) {
     computerSelection = computerPlay();
     playerSelection = playerpick;

     if (playerSelection === computerSelection) {
        return "Its a Tie"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors")  {
         playerScore++
         return "You Win, Rock beats scissors" 
     } 
    else if (playerSelection === "scissors" && computerSelection === "rock") {
         computerScore++
         return "You lose, Rock beats Scissors"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You win, Paper beats Rock"
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lose Paper beats Rock"
    }
   else if (playerSelection === "scissors" && computerSelection === "paper" ){
        playerScore++
        return "You win! Scissors beats Paper"
    } 
    else if (playerSelection === "paper" && computerSelection == "scissors") {
        computerScore++
        return "You Lose Scissors beats Paper"
    }
 }
console.log(playRound(playerpick, computerPlay()))
