const pscore = document.querySelector('.playerScore');
const cscore = document.querySelector('.computerScore');
console.log(pscore.innerText);
console.log(cscore.innerText)


function result() {
    alert(`FINAL SCORE : \nPlayer score : ${pscore.innerText}\nComputer score : ${cscore.innerText}`);
    pscore.innerText = 0;
    cscore.innerText = 0;
}

function incrementPlayer() {
    pscore.innerText = +pscore.innerText+1;
}

function incrementComputer() {
    cscore.innerText = +cscore.innerText+1;
}

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

function roundPlay(e) {

    const playerSelection = this.classList.value;
    const computerSelection = getComputerChoice();
    
    if(playerSelection == "ROCK" && computerSelection == "SCISSOR") {
        incrementPlayer();
    }else if(playerSelection == "ROCK" && computerSelection == "PAPER") {
        incrementComputer();
    }else if(playerSelection == "PAPER" && computerSelection == "SCISSOR") {
        incrementComputer();
    }else if(playerSelection == "PAPER" && computerSelection == "ROCK") {
        incrementPlayer();
    }else if(playerSelection == "SCISSOR" && computerSelection == "ROCK") {
        incrementComputer();
    }else if(playerSelection == "SCISSOR" && computerSelection == "PAPER") {
        incrementPlayer();
    }

    if(pscore.innerText == '5' || cscore.innerText == '5') {
        console.log("ass")
        result();
    }

    
}


const btns = document.querySelectorAll('button');
btns.forEach((btn)=> {
    btn.addEventListener('click', roundPlay);
    
})















// function game() {
//     let userScore = 0;
//     let computerScore = 0;
//     for(let i = 0; i<5; i++) {
//         let playerSelection = prompt("Enter your choice : Rock, Paper or Scissor?", "ROCK");
//         let computerSelection = getComputerChoice();
//         let result = roundPlay(playerSelection, computerSelection);
//         if(result == 1){
//             console.log("user wins the round : ",i)
//             userScore++;
//         }else if(result == -1) {
//             console.log("computer wins the round : ",i)
//             computerScore++;
//         }else { 
//             console.log("round : ", i, " is a draw");
//         }
//     }
//     if(userScore > computerScore) {
//         console.log("User is the winner, with score : ",userScore);
//     }else if(computerScore > userScore) {
//         console.log("Computer is the winner, with score : ", computerScore);
//     }else { 
//         console.log("Its a draw");
//     }
// }

// const playerSelection = "ROCK";
// const computerSelection = getComputerChoice();
// console.log(roundPlay(playerSelection, computerSelection));

// game();

