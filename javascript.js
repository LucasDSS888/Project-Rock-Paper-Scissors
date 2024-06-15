let humanScore = 0;
let computerScore = 0;
let computerChoise = getComputerChoice();
let humanChoise = getHumanChoice();

if (humanChoise != 'Invalid value') {
    if(computerChoise == 'rock' && humanChoise == 'scissors') {
        computerScore++;
    }else if(computerChoise == 'paper' && humanChoise == 'rock') {
        computerScore++;
    }else if(computerChoise == 'scissors' && humanChoise == 'paper') {
        computerScore++;
    }else if(humanChoise == 'rock' && computerChoise == 'scissors') {
        humanScore++;
    }else if(humanChoise == 'paper' && computerChoise == 'rock') {
        humanScore++;
    }else if(humanChoise == 'scissors' && computerChoise == 'paper') {
        humanScore++;
    }else {
        console.log('Draw');
    }

    console.log('humanScore:' + humanScore);
    console.log('computerScore:' + computerScore);
    console.log('humanChoise:' + humanChoise);
    console.log('computerChoise:' + computerChoise);

}





















function getComputerChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    let randomnumber = Math.random();
    let choise;
    
    if (randomnumber <= 0.33) {
        choise = paper;
    }else if (randomnumber >= 0.33 && randomnumber <= 0.66) {
        choise = scissors;
    }else {
        choise = rock;
    }

    return choise;
}

function getHumanChoice() {
    let humanChoiseNumb = parseInt(prompt("[1]rock [2]paper [3]scissors"));
    let humanChoise;

    if (humanChoiseNumb == 1) {
        humanChoise = 'rock';
    }else if(humanChoiseNumb == 2) {
        humanChoise = 'paper';
    }else if(humanChoiseNumb == 3) {
        humanChoise = 'scissors';
    }else {
        alert('Invalid value');
    }
    return humanChoise;
}