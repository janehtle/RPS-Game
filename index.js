const list = ["rock", "paper", "scissors"]; //an array, has 3 strings aka a list of choices we can choose from

function getComputerChoice() { //function with no params
    const computerChoice = list[Math.floor(Math.random() * list.length)]; //this will do the math to assign a numerical value to the choices from the list
    return computerChoice; //returns the result of the math done by computerChoice (resulting in r, p, or s)
}

let playerScore = 0; //sets variable for player score with value inital at 0
let computerScore = 0; //sets variable for computer score with value inital at 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a tie! ${playerSelection} matches ${computerSelection}.`;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ) {
        playerScore++; //increments score by 1 if player wins
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        computerScore++; //increments score by 1 if computer wins
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function getPlayerChoice() {
    let userInput = false; //declares variable as false and will be the basis to checking if input is valid or not
    while (userInput == false) { //allow for a loop to continue checking if input is valid
        const choice = prompt("Choose your weapon: Rock, Paper, Scissors"); //prompt will appear
        if (choice == null) { //user input will be null if it is not valid 
            continue; // continues to ask user for an input if input isnt valid
        }
        const choiceInLower = choice.toLowerCase(); //convert input to lowercase
        if (list.includes(choiceInLower)) { //if input in lowercase consists of strings from the list
            userInput = true; //then it is valid
            return choiceInLower; //returns the user's input in lowercase
        }
    }
}

function game() { //func with no params
    for (let i = 0; i < 5; i++) { //loop to run code 5x
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); //calls the func to play round and returns string appropriate to results
        }
        console.log(`Game over! You: ${playerScore}, Computer: ${computerScore}`); //displays string with scores that have been tallied per round
}

game()

