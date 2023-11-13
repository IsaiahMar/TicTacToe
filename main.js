var winner = [];
var circle = document.getElementById("circle-box");
var circles = document.getElementsByClassName('circle')
var crosses = document.getElementsByClassName('cross')
var cross = document.getElementById("cross-box");
var score = document.getElementsByClassName("score")
var tieScore = document.getElementById("tieScore")
var dragged;
var turn = 1;
function dragItem(event){
    event.dataTransfer.setData('text', event.target.id)
}
function allowDropItems(event){
    event.preventDefault()
}
function dropItems(event){
    event.preventDefault()
    var game = event.dataTransfer.getData('text')
    event.target.appendChild(document.getElementById(game))
}

function playTheGame(){
    var board1, board2, board3, board4, board5, board6, board7, board8, board9;
    board1 = document.getElementById("b1")
    board2 = document.getElementById("b2")
    board3 = document.getElementById("b3")
    board4 = document.getElementById("b4")
    board5 = document.getElementById("b5")
    board6 = document.getElementById("b6")
    board7 = document.getElementById("b7")
    board8 = document.getElementById("b8")
    board9 = document.getElementById("b9")

    var b1btn, b2btn, b3btn, b4btn, b5btn,  
        b6btn, b7btn, b8btn, b9btn; 
    var 
    b1btn = document.getElementById("b1"); 
    b2btn = document.getElementById("b2"); 
    b3btn = document.getElementById("b3"); 
    b4btn = document.getElementById("b4"); 
    b5btn = document.getElementById("b5"); 
    b6btn = document.getElementById("b6"); 
    b7btn = document.getElementById("b7"); 
    b8btn = document.getElementById("b8"); 
    b9btn = document.getElementById("b9"); 

    if ((board1 == cross) && (board2 == cross) && (board3 == cross)) { 
    document.getElementById('print').innerHTML = "Player X won"; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b1btn.style.color = "red"; 
    b2btn.style.color = "red"; 
    b3btn.style.color = "red"; 
} 
else if (( board1 == cross) && (board4 == 'x' || 
    board4 == cross) && (board7 == 'x' || board7 == cross)) { 
    document.getElementById('print') 
        .innerHTML = "Player X won"; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b1btn.style.color = "red"; 
    b4btn.style.color = "red"; 
    b7btn.style.color = "red"; 
} 
else if ((board7 == 'x' || board7 == cross) && (board8 == 'x' || 
    board8 == cross) && (board9 == 'x' || board9 == cross)) { 

    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 

    b7btn.style.color = "red"; 
    b8btn.style.color = "red"; 
    b9btn.style.color = "red"; 
} 
else if ((board3 == 'x' || board3 == cross) && (board6 == 'x' || 
    board6 == cross) && (board9 == 'x' || board9 == cross)) { 
    document.getElementById('print').innerHTML = "Player X won"; 

    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 

    b3btn.style.color = "red"; 
    b6btn.style.color = "red"; 
    b9btn.style.color = "red"; 
} 
else if ((board1 == 'x' || board1 == cross) && (board5 == 'x' || 
    board5 == cross) && (board9 == 'x' || board9 == cross)) { 
    document.getElementById('print').innerHTML = "Player X won"; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 

    b1btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b9btn.style.color = "red"; 
} 
else if ((board3 == 'x' || board3 == cross) && (board5 == 'x' || 
    board5 == cross) && (board7 == 'x' || board7 == cross)) { 
    document.getElementById('print').innerHTML = "Player X won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b3btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b7btn.style.color = "red"; 
} 
else if ((board2 == 'x' || board2 == cross) && (board5 == 'x' || 
    board5 == cross) && (board8 == 'x' || board8 == cross)) { 
    document.getElementById('print').innerHTML = "Player X won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b9btn.disabled = true; 

    b2btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b8btn.style.color = "red"; 
} 
else if ((board4 == 'x' || board4 == cross) && (board5 == 'x' || 
    board5 == cross) && (board6 == 'x' || board6 == cross)) { 
    document.getElementById('print') 
        .innerHTML = "Player X won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b4btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b6btn.style.color = "red"; 
} 

else if ((board1 == '0' || board1 == cross) && (board2 == '0' || 
    b2 == cross) && (b3 == '0' || b3 == cross)) { 
    document.getElementById('print') 
        .innerHTML = "Player 0 won"; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b1btn.style.color = "red"; 
    b2btn.style.color = "red"; 
    b3btn.style.color = "red"; 
} 
else if ((board1 == circle) && (board4 == circle) && (board7 == circle)) { 
    document.getElementById('print').innerHTML = "Player 0 won"; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b1btn.style.color = "red"; 
    b4btn.style.color = "red"; 
    b7btn.style.color = "red"; 
} 
else if ((board7 == circle) && (board8 == circle) && (board9 == circle)) { 
    document.getElementById('print').innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 

    b7btn.style.color = "red"; 
    b8btn.style.color = "red"; 
    b9btn.style.color = "red"; 
} 
else if ((board3 == '0' || board3 == '0') && (board6 == '0' || 
    board6 == '0') && (board9 == '0' || board9 == '0')) { 
    document.getElementById('print').innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    
    b3btn.style.color = "red"; 
    b6btn.style.color = "red"; 
    b9btn.style.color = "red"; 
} 
else if ((board1 == '0' || board1 == '0') && (board5 == '0' || 
    board5 == '0') && (board9 == '0' || board9 == '0')) { 
    document.getElementById('print') 
        .innerHTML = "Player 0 won"; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 

    b1btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b9btn.style.color = "red"; 
} 
else if ((board3 == '0' || board3 == '0') && (board5 == '0' || 
    board5 == '0') && (board7 == '0' || board7 == '0')) { 
    document.getElementById('print') 
        .innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b3btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b7btn.style.color = "red"; 
} 
else if ((board2 == '0' || board2 == '0') && (board5 == '0' || 
    board5 == '0') && (board8 == '0' || board8 == '0')) { 
    document.getElementById('print') 
        .innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b9btn.disabled = true; 

    b2btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b8btn.style.color = "red"; 
} 
else if ((board4 == '0' || board4 == '0') && (board5 == '0' || 
    board5 == '0') && (board6 == '0' || board6 == '0')) { 
    document.getElementById('print') 
        .innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b4btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b6btn.style.color = "red"; 
} 


else if ((board1 == 'X' || board1 == '0') && (board2 == 'X'
    || board2 == '0') && (board3 == 'X' || board3 == '0') && 
    (board4 == 'X' || board4 == '0') && (board5 == 'X' || 
        board5 == '0') && (board6 == 'X' || board6 == '0') && 
    (board7 == 'X' || board7 == '0') && (board8 == 'X' || 
        board8 == '0') && (board9 == 'X' || board9 == '0')) { 
    document.getElementById('print').innerHTML = "Match Tie"; 
} 
else { 

    if (flag == 1) { 
        document.getElementById('print') 
            .innerHTML = "Player X Turn"; 
    } 
    else { 
        document.getElementById('print') 
            .innerHTML = "Player 0 Turn"; 
    } 
} 
}
function playGame(e){
    e.preventDefault()
    for(i = 0; i < winner.length; i++){
        if(circle = "dragged"){
            let playerText = document.createElement('p')
            playerText.innerHTML = "Player 2 moved";
            document.getElementById("circle-box").appendChild(playerText)
            let circle = document.querySelector("div")
            circle.setAttribute("draggable", false)
            
        }
        else if(cross = "dragged"){
            document.getElementById("circle-box").disabled = false
            document.getElementById("cross-box").disabled = true
        }
    }
  
}
playGame();
function getWinner(){
    var player1;
    var player2;
    circle = player1;
    cross = player2;
    score = 0;
    tieScore = 0;
    winner.push([1, 2, 3]);
    winner.push([4, 5, 6]);
    winner.push([7, 8, 9]);
    winner.push([1, 4, 7]);
    winner.push([2, 5, 8]);
    winner.push([3, 6, 9]);
    winner.push([1, 5, 9]);
    winner.push([3, 5, 7]);

    
    if(player1 || player2 === winner){
        score += 1
    }
    else{
        tieScore += 1
    }
}
function reset(){
    location.reload()
    board1 = board2 = board3 = board4 = board5 = board6 = board7 = board8 = board9 = '';
}
function turns(){
    
}