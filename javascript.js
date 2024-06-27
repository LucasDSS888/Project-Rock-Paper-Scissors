
let humanChoise;
let humanChoiseNumb;
let num;
let humanScore = 0;
let computerScore = 0;




function winner(humanChoise, computerChoise) {
        if(computerChoise == 'rock' && humanChoise == 'scissors') {
            const image = document.querySelector('.cWinner');
            image.src = './alex/girl1.png';
            return 'computer';
        }else if(computerChoise == 'paper' && humanChoise == 'rock') {
            const image = document.querySelector('.cWinner');
            image.src = './alex/girl1.png';
            return 'computer';
        }else if(computerChoise == 'scissors' && humanChoise == 'paper') {
            const image = document.querySelector('.cWinner');
            image.src = './alex/girl1.png';
            return 'computer';
        }else if(humanChoise == 'rock' && computerChoise == 'scissors') {
            const image = document.querySelector('.cWinner');
            image.src = './alex/alex1.png';
            return 'human';
        }else if(humanChoise == 'paper' && computerChoise == 'rock') {
            const image = document.querySelector('.cWinner');
            image.src = './alex/alex1.png';
            return 'human';
        }else if(humanChoise == 'scissors' && computerChoise == 'paper') {
            const image = document.querySelector('.cWinner');
            image.src = './alex/alex1.png';
            return 'human';
        }else {
            const image = document.querySelector('.cWinner');
            image.src = './alex/DRAW.png';
            return 'draw';
        }
    }



function getComputerChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    let randomnumber = Math.random();
    let choise;
    
    if (randomnumber <= 0.33) {
        choise = paper;
        const image = document.querySelector('.imgg');
        image.src = './alex/girlP.png';
    }else if (randomnumber >= 0.33 && randomnumber <= 0.66) {
        choise = scissors;
        const image = document.querySelector('.imgg');
        image.src = './alex/girlS.png';
    }else {
        choise = rock;
        const image = document.querySelector('.imgg');
        image.src = './alex/girlR.png';
    }

    return choise;
}

function score(win) {
    if(win == 'human') {
        humanScore += 1;
    }if(win == 'computer') {
        computerScore += 1;
    }
    const hS = document.querySelector('span.hS');
    hS.textContent = '' + humanScore;

    const cS = document.querySelector('span.cS');
    cS.textContent = '' + computerScore;

}


const choiseAP = document.querySelector(".card.alexP");
choiseAP.addEventListener("click", () => {
    humanChoise = 'paper';
    let computerChoise = getComputerChoice();
    winner(humanChoise, computerChoise);
    score(winner(humanChoise, computerChoise));
});
    
const choiseAR = document.querySelector(".card.alexR");
choiseAR.addEventListener("click", () => {
    humanChoise = 'rock';;
    let computerChoise = getComputerChoice();
    winner(humanChoise, computerChoise);
 });

const choiseAS = document.querySelector(".card.alexS");
choiseAS.addEventListener("click", () => {
    humanChoise = 'scissors';
    let computerChoise = getComputerChoice();
    winner(humanChoise, computerChoise);
});



const girlDoubleClick = document.querySelector(".girl1");
girlDoubleClick.addEventListener("dblclick", () => {
    const image = document.querySelector('.imgg');
    image.src = './alex/girlN1.png';
});


