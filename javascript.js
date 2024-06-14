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

    console.log(randomnumber.toFixed(2));
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