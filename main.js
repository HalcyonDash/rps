let playerChoice = ""
let computerChoice = ""
let gameStatus = ""

let playerScore = 0
let computerScore = 0

////////// UI //////////

const main = document.querySelector("body");
const container = document.createElement("div");
const buttons = document.createElement("div");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

buttons.append(btnRock, btnPaper, btnScissors);
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";


main.appendChild(container);
main.appendChild(buttons);

btnRock.addEventListener("click", () => {
    playRound("rock");
})
btnPaper.addEventListener("click", () => {
    playRound("paper");
})
btnScissors.addEventListener("click", () => {
    playRound("scissors");
})

////////// GAME LOGIC //////////

// gameStatus =  "Rock, Paper, or Scissors?"
// playRound(playerChoice)
game()

function game() {
    gameStatus =  "Rock, Paper, or Scissors?"
    container.textContent = gameStatus;
    playerScore = 0
    computerScore = 0
}

function playRound(playerChoice) {
    console.log("Player chose " + playerChoice);
    computerChoice = getComputerChoice();
    console.log(computerChoice)
    // while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
    //     playerChoice = prompt(gameStatus).toLowerCase()
    // }

    if (computerChoice == playerChoice) {//draw
        gameStatus = "You both chose " + playerChoice + ". Play again." + getScore();
    }
    else {
        switch(computerChoice) {
            case "rock":
                switch(playerChoice) {
                    case "paper" : 
                        playerScore++;    
                        gameStatus = "Paper covers rock. You win!" + getScore();
                        break;
                    case "scissors" :
                        computerScore++;
                        gameStatus = "Rock crushes scissors. You lose." + getScore();
                        break;
                }
                break;
            case "paper":
                switch(playerChoice) {
                    case "rock" : 
                        computerScore++;
                        gameStatus = "Paper covers rock. You lose." + getScore();
                        break;
                    case "scissors" :
                        playerScore++;
                        gameStatus = "Scissors cut paper. You win!" + getScore();
                        break;
                }
                break;
            case "scissors":
                switch(playerChoice) {
                    case "rock" : 
                        playerScore++;
                        gameStatus = "Rock crushes scissors. You win!" + getScore();
                        break;
                    case "paper" :
                        computerScore++;
                        gameStatus = "Scissors cut paper. You lose." + getScore();
                        break;
                }
                break;
        }
    }
    container.textContent = gameStatus;
    checkWinner();
}

function getScore() {
    if (playerScore + computerScore > 0) {
        return "\nYou: " + playerScore + " Computer: " + computerScore
    }
    else {
        return ""
    }
}

function getComputerChoice () {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function checkWinner() {
    if (playerScore == 3) {
        alert(gameStatus + "\nYou won the game! Press OK to play again.");
        game();
    }
    else if (computerScore == 3) {
        alert(gameStatus + "\nYou lost the game. Press OK to play again.");
        game();
    }
    else { 
        return
    }
}