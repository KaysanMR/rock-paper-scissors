// Rock Paper Scissors game by Kaysan M. Rifath

const CHOICES = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

const delay = ms => new Promise(res => setTimeout(res, ms)); //util for async delay

const initialize = () => {
    playerScore = 0;
    computerScore = 0;

    message.textContent = 'Welcome to Rock Paper Scissors!';
    log.textContent = 'choose an option to begin :)'
    scoreboard.innerHTML = (`you: ${playerScore} computer: ${computerScore}`);
    hide('.start');
    show('.game');
};

const message = document.querySelector('.message');

const log = document.querySelector('.log');

const scoreboard = document.querySelector('.score');

function getComputerChoice() {
    let choice = Math.floor( Math.random()*3);
    return CHOICES[choice];
};

const start = document.querySelector('.start');
start.addEventListener('click',() => initialize());

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
        end();
    });
});


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

const end = async () => {
    const reset = () => {
        hide('.game');
        show('.start');

    };
    if (playerScore >= 5) {
        await delay(300);
        alert('You Win!');
        reset();
    } else if (computerScore >= 5) {
        await delay(300);
        alert ('You Lose!');
        reset();
    };
};