
function getRandomInt(max) {
    return Math.floor(Math.random() *max);
}


function getComputerChoice() {
    //will randomly return either Rock, Paper, Scissors
    let arr = ["ROCK", "PAPER", "SCISSOR"];
    let randIndex = getRandomInt(3);
    // console.log("computer choice : ",arr[randIndex])
    return arr[randIndex];
}

function roundPlay(playerSelection, computerSelection) {

    playerSelection.toUpperCase();
    computerSelection.toUpperCase();
    if(playerSelection == "ROCK" && computerSelection == "SCISSOR") {
        return 1;
    }else if(playerSelection == "ROCK" && computerSelection == "PAPER") {
        return -1;
    }else if(playerSelection == "PAPER" && computerSelection == "SCISSOR") {
        return -1;
    }else if(playerSelection == "PAPER" && computerSelection == "ROCK") {
        return 1;
    }else if(playerSelection == "SCISSOR" && computerSelection == "ROCK") {
        return -1;
    }else if(playerSelection == "SCISSOR" && computerSelection == "PAPER") {
        return 1;
    }else {
        return 0;
    }

}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i<5; i++) {
        // let playerSelection = prompt("Enter your choice : Rock, Paper or Scissor?", "ROCK");
        // let computerSelection = getComputerChoice();
        // let result = roundPlay(playerSelection, computerSelection);
        // if(result == 1){
        //     console.log("user wins the round : ",i)
        //     userScore++;
        // }else if(result == -1) {
        //     console.log("computer wins the round : ",i)
        //     computerScore++;
        // }else { 
        //     console.log("round : ", i, " is a draw");
        // }
    }
    // if(userScore > computerScore) {
    //     console.log("User is the winner, with score : ",userScore);
    // }else if(computerScore > userScore) {
    //     console.log("Computer is the winner, with score : ", computerScore);
    // }else { 
    //     console.log("Its a draw");
    // }
}

// const playerSelection = "ROCK";
// const computerSelection = getComputerChoice();
// console.log(roundPlay(playerSelection, computerSelection));

game();

