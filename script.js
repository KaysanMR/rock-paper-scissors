// Rock Paper Scissors game by Kaysan M. Rifath

const CHOICES = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor( Math.random()*3);
    return CHOICES[choice];
};




const message = document.querySelector('.message');
    message.textContent = 'Welcome to Rock Paper Scissors!';

const log = document.querySelector('.log');
    log.textContent = 'choose an option to begin :)'

const scoreboard = document.querySelector('.score');

//game function
const button = document.querySelectorAll('#btn');
button.forEach(button => {
    button.addEventListener('click',(e) => {
        let playerChoice = (e.target.innerHTML.toLowerCase());
        let computerChoice = getComputerChoice();

        round(playerChoice,computerChoice);

        message.textContent = result;
        log.innerHTML = (`You chose ${playerChoice}, <n> The computer chose ${computerChoice}.`);
        scoreboard.innerHTML = (`you: ${playerScore} computer: ${computerScore}`);
    });
});

const toggleHide = (element) => {
    const hide = document.querySelector(element);
    if (hide.style.visibility === "hidden") {
        hide.style.visibility = "visible";
        hide.style.opacity = 1;
    } else {
        hide.style.opacity = 0;
        hide.style.visibility = "hidden";
    };
};

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

function replay() {
    if (confirm('Play Again?')) {
        playerScore = 0;
        computerScore = 0;
        game();
    } else {
        console.log('Thank you for playing!')
    }
}

//legacy functions

// let playerChoice = () => {
//     let rock = document.querySelector('.rock')
//     rock.addEventListener('click', () => {       
//         return 'rock';
//     });
    
//     let paper = document.querySelector('.paper')
//     paper.addEventListener('click', () => {
//         return 'paper';
//     });
    
//     let scissors = document.querySelector('.scissors')
//     scissors.addEventListener('click', () => {
//         return 'scissors';
//     });
// };


// function getPlayerChoice(){

//     // let playerChoice = prompt('Rock, Paper or Scissors?');
//     // if (CHOICES.includes(playerChoice.toLowerCase()) && playerChoice != '') { 
//     //     playerChoice = playerChoice.toLowerCase(); //convert input to only lowercase
//     //     return playerChoice;
//     // } else {
//     //     return (alert(`${playerChoice} is not a valid input, please try again.`),
//     //         getPlayerChoice());
//     // } 
// }

//Play 5 rounds, announce score & winner
// function game(){
//     if (playerScore <= 2 && computerScore <= 2){

//         playerChoice();
//         let computerChoice = getComputerChoice();

//         // calculate the winner of the round
//         winner(playerChoice,computerChoice);

//         console.log(`You chose ${playerChoice}, \n The computer chose ${computerChoice}.`);
//         console.log(result);
//         console.log(`Player: ${playerScore} \n Computer: ${computerScore}`)
//         return game();

//     } else {
//         if(playerScore > computerScore) {
//             return (console.log('YOU WIN!'), replay());
//         } else {
//             return (console.log('YOU LOSE :('),replay());
//         }
//     }
// }