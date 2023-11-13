
// player1_score = document.getElementById('player1');
// player2_score = document.getElementById('player2');
// let tiles = Array.from(document.getElementsByClassName('grid-square'))
// tieResult = document.getElementById('tie')
// result = document.getElementById('result')
// let gameActive = true
// var currentPlayer = "X"

// var tieResult = 0;
// var result = 0;
// var player1_score = 0
// var player2_score = 0;
// var p1_choice = "";
// var p2_choice = "";
// let play1 = "X"
// let play2 = "0"
   
// var b1 = document.getElementById('b1').value;
// var b2 = document.getElementById('b1').value;
// var b3 = document.getElementById('b1').value;
// var b4 = document.getElementById('b1').value;
// var b5 = document.getElementById('b1').value;
// var b6 = document.getElementById('b1').value;
// var b7 = document.getElementById('b1').value;
// var b8 = document.getElementById('b1').value;
// var b9 = document.getElementById('b1').value;
// let gameStarted = ["", "", "", "", "", "", "", "", ""]
// var winner = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 
//                  [1, 4, 7], [2, 5, 8], [3, 6, 9], 
//                 [1, 5, 9], [3, 5, 7]]
// function computerScore(){
//     let won = false
//     for(i = 0; i < winner.length; i++){
//         let winnerwin = winner[i]
//         let blk1 = gameStarted[winner[0]]
//         let blk2 = gameStarted[winner[1]]
//         let blk3 = gameStarted[winner[2]]

//         if(blk1 === "" || blk2 ==="" || blk3 === ""){
//             continue;
//         }
//         else if (a === b && b === c) {
//             roundWon = true;
//             break
//         }
//         if (won) {
//             statusDisplay.innerHTML = winningMessage();
//             gameActive = false;
//             return;
//         }

//     //     if(player1 = winner){
//     //         player1_score += 1
//     //         console.log('Player 1 won!')
//     //     }
//     //     else if(player2 = winner){
//     //         player2_score += 1
//     //         console.log('Player 2 won!')
//     //     }
//     // else if(player1 != winner && player2 != winner){
//     //     tieResult += 1
//     //     console.log('Its a tie')
//     // }

//     // }
=======
player1_score = document.getElementById('player1');
player2_score = document.getElementById('player2');
tieResult = document.getElementById('tie')
result = document.getElementById('result')
var p1 = 0  
var tieResult = 0;
var result = 0;
var player1_score = 0
var player2_score = 0;
var p1_choice = "";
var p2_choice = "";


function computerScore(player1, player2){
    p1_choice = player1
    p2_choice = player2
    var winner = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 
                 [1, 4, 7], [2, 5, 8], [3, 6, 9], 
                 [1, 5, 9], [3, 5, 7]]
>
    
// }
// }


// function winningMessage(){
//     alert("Good job you won")
// }
var winner = [];
var circle = document.getElementById("circle-box");
var cross = document.getElementById("cross-box");
var score = document.getElementsByClassName("score")
var tieScore = document.getElementById("tieScore")
var dragged;

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

// function playTheGame(){
//     var board1, board2, board3, board4, board5, board6, board7, board8, board9;
//     board1 = document.getElementById("b1")
//     board2 = document.getElementById("b2")
//     board3 = document.getElementById("b3")
//     board4 = document.getElementById("b4")
//     board5 = document.getElementById("b5")
//     board6 = document.getElementById("b6")
//     board7 = document.getElementById("b7")
//     board8 = document.getElementById("b8")
//     board9 = document.getElementById("b9")
// }
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

=======
}               

