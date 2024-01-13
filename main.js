let playerChoice = ""
let computerChoice = ""
let gameStatus = ""

let playerScore = 0
let computerScore = 0

game()

function game() {
    gameStatus =  "Rock, Paper, or Scissors?"
    playerScore = 0
    computerScore = 0
    while (playerScore < 3 && computerScore < 3) {
        playRound()
    }

    if (playerScore > computerScore) {
        alert(gameStatus + "\nYou won the game! Press OK to play again.");
    }
    else if (playerScore < computerScore) {
        alert(gameStatus + "\nYou lost the game. Press OK to play again.");
    }
    game()
}

function playRound() {
    playerChoice = ""
    computerChoice = getComputerChoice();
    console.log(computerChoice)
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt(gameStatus).toLowerCase()
    }

    if (computerChoice == playerChoice) {//draw
        gameStatus = "You both chose " + playerChoice + ". Play again." + getScore();
        playRound();
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
    switch(random(3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function random(number) {
    return Math.floor(Math.random() * number)
}