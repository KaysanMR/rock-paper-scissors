// Rock Paper Scissors game
const CHOICES = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

//start game
game();


// randomize computer choice
function getComputerChoice() {
    let choice = Math.floor( Math.random()*3);
    return CHOICES[choice];
}

// get player choice and validate input (not working)
function getPlayerChoice(){
    let playerChoice = prompt('Rock, Paper or Scissors?');
    if (CHOICES.includes(playerChoice.toLowerCase()) && playerChoice != '') {
        playerChoice = playerChoice.toLowerCase(); //convert input to only lowercase
        return playerChoice;
    } else {
        return (alert(`${playerChoice = 'null'} is not valid, please try again.`),
            getPlayerChoice());
    } 
}

// decide on the winner
function round(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return result = (`It's a tie!`);
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        win();

    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        win();

    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        win();

    } else {
        lose();
    };
    function win(){
        playerScore ++
        return result = (`You win! ${playerChoice} beats ${computerChoice}!`);
    }
    function lose(){
        computerScore ++
        return result = (`You lose! ${computerChoice} beats ${playerChoice}!`);
    }
    //make sure the actual function returns the result
    return result;
}

//Play 5 rounds, announce score & winner
function game(){
    if (playerScore <= 2 && computerScore <= 2){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        round(playerChoice,computerChoice);
        console.log(`You chose ${playerChoice}, \n The computer chose ${computerChoice}.`);
        console.log(result);
        console.log(`Player: ${playerScore} \n Computer: ${computerScore}`)
        return game();
    } else {
        if(playerScore > computerScore) {
            return (console.log('YOU WIN!'), replay());
        } else {
            return (console.log('YOU LOSE :('),replay());
        }
    }
}

function replay() {
    if (confirm('Play Again?')) {
        playerScore = 0;
        computerScore = 0;
        game();
    } else {
        console.log('Thank you for playing!')
    }
}
