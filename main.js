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
    
    console.log('')
    for(i = 0; i < winner.length; i++){
        if(player1 = winner){
            
        }
    }
    
}               
let turns = 1;

while (true){
    

    if (turns % 2 !== 0) {
        
    }
}

function draw(x) {
    x.innerHTML = 'x'
}


