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