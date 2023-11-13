let turns = 1;


function draw(x) {
    let playerTurn = document.getElementsByClassName('player-turn');

    if (turns % 2 !== 0) {
        x.innerHTML = 'x';
        playerTurn.innerHTML = 'Player 1';
    }
    else {
        x.innerHTML = 'o';
        playerTurn = 'Player 2'
    }
    turns++;
}


