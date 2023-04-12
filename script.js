// Rock Paper Scissors game
const CHOICES = ['rock', 'paper', 'scissors']

// randomize computer choice
function getComputerChoice() {
    let choice = Math.floor( Math.random()*3);
    return CHOICES[choice];
}

// get player choice and validate input
function getPlayerChoice(){
    let playerChoice = prompt('Rock, Paper or Scissors?');
    playerChoice = playerChoice.toLowerCase(); //convert input to only lowercase
    if (CHOICES.includes(playerChoice)) {
        return playerChoice; //this works when it runs the first time, but not when running again.
    } else {
        alert(`${playerChoice} is not valid, please try again.`);
        getPlayerChoice();
    } 
}

console.log(getPlayerChoice());


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
        return result = (`You win! ${playerChoice} beats ${computerChoice}!`);
    }
    function lose(){
        return result = (`You lose! ${computerChoice} beats ${playerChoice}!`);
    }
    return result;
}
