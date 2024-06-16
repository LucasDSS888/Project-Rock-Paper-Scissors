let computerChoise;
let humanChoise;


playGame();


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    
    
    
    function playRound(humanChoise, computerChoise) {
        computerChoise = getComputerChoice();
        humanChoise = getHumanChoice();
        if (humanChoise != 'Invalid value') {
            if(computerChoise == 'rock' && humanChoise == 'scissors') {
                computerScore++;
                console.log("You lose!! Rock beats scissors");
            }else if(computerChoise == 'paper' && humanChoise == 'rock') {
                computerScore++;
                console.log("You lose!! Paper beats rock");
            }else if(computerChoise == 'scissors' && humanChoise == 'paper') {
                computerScore++;
                console.log("You lose!! Scissors beats paper");
            }else if(humanChoise == 'rock' && computerChoise == 'scissors') {
                humanScore++;
                console.log("You Win!! Rock beats scissors");
            }else if(humanChoise == 'paper' && computerChoise == 'rock') {
                humanScore++;
                console.log("You Win!! Paper beats rock");
            }else if(humanChoise == 'scissors' && computerChoise == 'paper') {
                humanScore++;
                console.log("You Win!! Scissors beats paper");
            }else {
                console.log('Draw');
            }
            console.log(`Human:${humanScore} vs Computer:${computerScore}`)
        }else {
            alert('Try another value');
        }
        
        
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
        humanChoise = 'Invalid value';
    }
    return humanChoise;
}