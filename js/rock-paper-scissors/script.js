
const options = ['rock','paper','scissors'];
const getComputerChoice = () => options[Math.floor(Math.random() * options.length)]

function playARound(playerSelection, computerSelection = getComputerChoice()) {
    let p = options.indexOf(playerSelection.toLowerCase());
    let c = options.indexOf(computerSelection.toLowerCase());
    if (p-c == 1 || p == 0 && c == 2) {
        return [1, `your ${playerSelection} beats ${computerSelection}`];
    } 
    if (p == c) {
        return [0, `${playerSelection} equals ${computerSelection}... retry!`];
    }
    return [-1, `${computerSelection} beats your ${playerSelection}`]; 
    
}

function playAGame(rounds = 5) {
    let pScore = 0;
    let cScore = 0;
    for (i=0; i<rounds; i++) {
        let p = window.prompt('Pick your move: ' + options);
        result = playARound(p);
        switch (result[0]) {
            case -1:
                cScore ++;
                break;
            case 0:
                i --;
                break;
            case 1:
                pScore ++;
                break;
        }
        console.log(result[1]);
    }
    console.log(`Final score: ${pScore} - ${cScore}`);
    if (pScore < cScore) {
        console.log("you lose :(");
    }
    if (cScore > pScore) {
        console.log("draw... :|");
    }
    if (cScore == pScore) {
        console.log("you win! :)");
    }
}
