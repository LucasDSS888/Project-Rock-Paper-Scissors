let computerChoise;
let humanChoise;
let humanChoiseNumb = humanChoiseImgClick();


// playGame();






// getHumanChoice();




function humanChoiseImgClick() {
    
    let num;

    const choiseAP = document.querySelector(".card.alexP");
    choiseAP.addEventListener("click", () => {
        num = 2;
        alert(num);
    });
    
    const choiseAR = document.querySelector(".card.alexR");
    choiseAR.addEventListener("click", () => {
        num = 1;
        alert(num);
    });

    const choiseAS = document.querySelector(".card.alexS");
    choiseAS.addEventListener("click", () => {
        num = 3;
        alert(num);
    });

    return num;

}

alert(humanChoiseNumb);




function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    
    
    
    function playRound(humanChoise, computerChoise) {
        humanChoise = getHumanChoice();
        computerChoise = getComputerChoice();
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

function getHumanChoice() {

    let humanChoise;

    if (humanChoiseNumb == 1) {
        humanChoise = 'rock';
        alert('aeee');
    }else if(humanChoiseNumb == 2) {
        humanChoise = 'paper';
    }else if(humanChoiseNumb == 3) {
        humanChoise = 'scissors';
    }else {
          alert('aff')
    }
    return humanChoise;
}





