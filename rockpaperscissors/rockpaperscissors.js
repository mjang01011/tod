let userScore = 0;
let comScore = 0;

function comRandom() {
    let rand = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissor'];
    console.log(options[rand]);
    return options[rand];
}

function whoWins(userChoice) {
    let comChoice = comRandom();
    if(comChoice == userChoice){
        console.log("draw");
    }
    else if(comChoice == 'rock' && userChoice == 'paper'){
        console.log("user wins");
        userScore += 1;
    }
    else if(comChoice == 'rock' && userChoice == 'scissor'){
        console.log("computer wins");
        comScore += 1;
    }
    else if(comChoice == 'paper' && userChoice == 'rock'){
        console.log("computer wins");
        comScore += 1;
    }
    else if(comChoice == 'paper' && userChoice == 'scissor'){
        console.log("user wins");
        userScore += 1;
    }
    else if(comChoice == 'scissor' && userChoice == 'paper'){
        console.log("computer wins");
        comScore += 1;
    }
    else{
        console.log("user wins");
        userScore += 1;
    }
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("comScore").innerHTML = comScore;
    document.getElementById("userChoice").innerHTML = userChoice;
    document.getElementById("comChoice").innerHTML = comChoice;
    if(userScore == 5){
        alert("YOU WON!");
        location. reload();
    }
    else if(comScore == 5){
        alert("YOU LOST!");
        location. reload();
    }
}