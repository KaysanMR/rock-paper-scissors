// Rock Paper Scissors game by Kaysan M. Rifath

const CHOICES = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;
const maxScore = 3;

const delay = ms => new Promise(res => setTimeout(res, ms)); //util for async delay

const initialize = () => {
    playerScore = 0;
    computerScore = 0;

    endScore.textContent = '';
    message.textContent = 'Welcome to Rock Paper Scissors!';
    log.textContent = 'choose an option to begin :)'
    scoreboard.innerHTML = (`you: ${playerScore} computer: ${computerScore}`);
    hide('.menu');
    show('.game');
};

const message = document.querySelector('.message');

const replayMessage = document.querySelector('.replayMessage');
replayMessage.textContent = '';

const log = document.querySelector('.log');

const scoreboard = document.querySelector('.score');

function getComputerChoice() {
    let choice = Math.floor( Math.random()*3);
    return CHOICES[choice];
};

const start = document.querySelector('.start');
start.addEventListener('click',() => initialize());



game();

//game function
function game() {
    const button = document.querySelectorAll('#btn');
    button.forEach(button => {
        button.addEventListener('click',(e) => {
            let playerChoice = (e.target.innerHTML.toLowerCase());
            let computerChoice = getComputerChoice();
            
            round(playerChoice,computerChoice);
    
            message.textContent = result;
            log.innerHTML = (`You chose ${playerChoice}, <n> The computer chose ${computerChoice}.`);
            scoreboard.innerHTML = (`you: ${playerScore} computer: ${computerScore}`);
            end();
        });
    });
};


function hide(element) {
    const hide = document.querySelector(element);
    hide.style.opacity = 0;
    hide.style.visibility = "hidden";
};

function show(element) {
    const show = document.querySelector(element);
    show.style.visibility = "visible";
    show.style.opacity = 1;
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
};

const endScore = document.querySelector('.endScore');

const score = () => {
    const score = document.createTextNode(`you: ${playerScore} computer: ${computerScore}`);
    endScore.appendChild(score);
};

const end = async () => {
    const reset = () => {
        hide('.game');
        show('.menu');
        score();
        start.textContent = 'Play Again?'
    }
    if (playerScore >= maxScore) {
        replayMessage.textContent = 'You won!';
        reset();
    } else if (computerScore >= maxScore) {
        replayMessage.textContent = 'You lost!';
        reset();
    };
};