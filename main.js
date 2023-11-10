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
//                  [1, 5, 9], [3, 5, 7]]
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
    
// }
// }


// function winningMessage(){
//     alert("Good job you won")
// }

function dragItem(event){
    event.dataTransfer.setData('text', event.target.id)
}
function allowDropItems(event){
    event.preventDefault()
}
function dropItems(event){
    event.preventDefault()
    var game = event.dataTransfer.getData('text')
    event.target.appendchild(document.getElementById(game))
}