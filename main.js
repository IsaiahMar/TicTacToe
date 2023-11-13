var turn = 1;
var onescore = 0
var twoscore = 0
var tiescore = 0
var turns = 0
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
    b1btn = document.getElementById("b1"); 
    b2btn = document.getElementById("b2"); 
    b3btn = document.getElementById("b3"); 
    b4btn = document.getElementById("b4"); 
    b5btn = document.getElementById("b5"); 
    b6btn = document.getElementById("b6"); 
    b7btn = document.getElementById("b7"); 
    b8btn = document.getElementById("b8"); 
    b9btn = document.getElementById("b9"); 

    if((board1.innerHTML == board2.innerHTML) && (board2.innerHTML == board3.innerHTML))
    {
        if(board1.innerHTML === "X"){
            console.log("win")
            document.getElementById('onescore').textContent = `Player 1 Wins: ${onescore + 1}`;
            
        }
        else if(board1.innerHTML === "O"){
            document.getElementById('twoscore').textContent = `Player 2 Wins: ${twoscore + 1}`
        }
    }

   else if((board1.innerHTML == board5.innerHTML) && (board5.innerHTML == board9.innerHTML))
    {
        if(board1.innerHTML === "X"){
            console.log("win")
            document.getElementById('onescore').textContent = `Player 1 Wins: ${onescore + 1}`;
            
        }
        else if(board1.innerHTML === "O"){
            document.getElementById('twoscore').textContent = `Player 2 Wins: ${twoscore + 1}`
        } 
    }
   else if((board2.innerHTML == board5.innerHTML) && (board5.innerHTML == board8.innerHTML))
    {
        if(board2.innerHTML === "X"){
            console.log("win")
            document.getElementById('onescore').textContent = `Player 1 Wins: ${onescore + 1}`;
            
        }
        else if(board2.innerHTML === "O"){
            document.getElementById('twoscore').textContent = `Player 2 Wins: ${twoscore + 1}`
        }
    }
    else if((board3.innerHTML == board6.innerHTML) && (board6.innerHTML == board9.innerHTML))
    {
        if(board3.innerHTML === "X"){
            console.log("win")
            document.getElementById('onescore').textContent = `Player 1 Wins: ${onescore + 1}`;
            
        }
        else if(board3.innerHTML === "O"){
            document.getElementById('twoscore').textContent = `Player 2 Wins: ${twoscore + 1}`
        }
    }
   else if((board4.innerHTML == board5.innerHTML) && (board5.innerHTML == board6.innerHTML))
    {
        if(board4.innerHTML === "X"){
            console.log("win")
            document.getElementById('onescore').textContent = `Player 1 Wins: ${onescore + 1}`;
            
        }
        else if(board4.innerHTML === "O"){
            document.getElementById('twoscore').textContent = `Player 2 Wins: ${twoscore + 1}`
        }
       
    }
    else if((board1.innerHTML == board4.innerHTML) && (board4.innerHTML == board7.innerHTML)){
        if(board1.innerHTML === "X"){
            console.log("win")
            document.getElementById('onescore').textContent = `Player 1 Wins: ${onescore + 1}`;
            
        }
        else if(board1.innerHTML === "O"){
            document.getElementById('twoscore').textContent = `Player 2 Wins: ${twoscore + 1}`
        }
    }
    else if((board3.innerHTML == board5.innerHTML) && (board5.innerHTML == board7.innerHTML)){
        if(board3.innerHTML === "X"){
            console.log("win")
            document.getElementById('onescore').textContent = `Player 1 Wins: ${onescore + 1}`;
            
        }
        else if(board3.innerHTML === "O"){
            document.getElementById('twoscore').textContent = `Player 2 Wins: ${twoscore + 1}`
        }
    }
    else if((board7.innerHTML == board8.innerHTML) && (board8.innerHTML == board9.innerHTML)){
        if(board7.innerHTML === "X"){
            console.log("win")
            document.getElementById('onescore').textContent = `Player 1 Wins: ${onescore + 1}`;
            
        }
        else if(board7.innerHTML === "O"){
            document.getElementById('twoscore').textContent = `Player 2 Wins: ${twoscore + 1}`
        }
    }
    else if(turns === 9){
        document.getElementById('tiescore').textContent = `It's a Tie`
        location.reload()
    }
    
    if (turn == 1) { 
        document.getElementById('print').innerHTML = "Player X Turn"; 
    } 
    else if(turn === 9){
        
    } 
    else { 
        document.getElementById('print') 
            .innerHTML = "Player 0 Turn"; 
    } 
    
} 
function turn1(){
    if(turn === 1){
        document.getElementById('b1').innerHTML = 'X';
        document.getElementById('b1').disabled = true
        turn = 0; 
    }
    else if(turn === 0) { 
        document.getElementById('b1').innerHTML = 'O'; 
        document.getElementById("b1").disabled = true; 
        turn = 1
    } 
    else if(turn === 9){
        document.getElementById('tiescore').textContent = `It's a Tie`
    }
}
function turn2(){
    if(turn === 1){
        document.getElementById('b2').innerHTML = 'X';
        document.getElementById("b2").disabled = true; 
        turn = 0;
        turns += 1 
    }
    else if(turns === 9){
        document.getElementById('tiescore').textContent = `It's a Tie`
    }
    else{ 
        document.getElementById("b2").innerHTML = "O"; 
        document.getElementById("b2").disabled = true; 
        turn = 1; 
    } 
   
}
function turn3(){
    if(turn === 1){
        document.getElementById('b3').innerHTML = 'X';
        document.getElementById("b3").disabled = true; 
        turn = 0
        turns += 1
    }
    else if(turn === 9){
        document.getElementById('tiescore').textContent = `It's a Tie`
    }
    else if(turn === 0) { 
        document.getElementById("b3").innerHTML = "O"; 
        document.getElementById("b3").disabled = true; 
        turn = 1; 
    } 
    
}
function turn4(){
    if(turn === 1){
        document.getElementById('b4').innerHTML = 'X';
        document.getElementById("b4").disabled = true; 
        turn = 0; 
        turns += 1
    }
    else if(turn === 9){
        document.getElementById('tiescore').textContent = `It's a Tie`
    } 
    else{ 
        document.getElementById("b4").innerHTML = "O"; 
        document.getElementById("b4").disabled = true; 
        turn = 1; 
    }
    
}
function turn5(){
    if(turn === 1){
        document.getElementById('b5').innerHTML = 'X';
        document.getElementById("b5").disabled = true; 
        turn = 0; 
        turns += 1
    }
    else if(turn === 9){
        document.getElementById('tiescore').textContent = `It's a Tie`
    } 
    else { 
        document.getElementById("b5").innerHTML = "O"; 
        document.getElementById("b5").disabled = true; 
        turn = 1; 
    } 
}
function turn6(){
    if(turn === 1){
        document.getElementById('b6').innerHTML = 'X';
        document.getElementById("b6").disabled = true; 
        turn = 0; 
        turns += 1
    }
    else if(turn === 9){
        document.getElementById('tiescore').textContent = `It's a Tie`
    } 
    else { 
        document.getElementById("b6").innerHTML = "O"; 
        document.getElementById("b6").disabled = true; 
        turn = 1; 
    } 
}
function turn7(){
    if(turn === 1){
        document.getElementById('b7').innerHTML = 'X';
        document.getElementById("b7").disabled = true; 
        turn = 0; 
        turns += 1
    }
    
    else { 
        document.getElementById("b7").innerHTML = "O"; 
        document.getElementById("b7").disabled = true; 
        turn = 1; 
    } 
}
function turn8(){
    if(turn === 1){
        document.getElementById('b8').innerHTML = 'X';
        document.getElementById("b8").disabled = true; 
        turn = 0; 
        turns += 1
    }
    else if(turn === 9){
        document.getElementById('tiescore').textContent = `It's a Tie`
    } 
    else { 
        document.getElementById("b8").innerHTML = "O"; 
        document.getElementById("b8").disabled = true; 
        turn = 1; 
    } 
}
function turn9(){
    if(turn === 1){
        document.getElementById('b9').innerHTML = 'X';
        document.getElementById("b9").disabled = true; 
        turn = 0; 
        turns += 1
    }
    else if(turn === 9){
        document.getElementById('tiescore').textContent = `It's a Tie`
        
    } 
    else { 
        document.getElementById("b9").innerHTML = "O"; 
        document.getElementById("b9").disabled = true; 
        turn = 1; 
    } 
}

function reset(){
    location.reload()
    board1 = board2 = board3 = board4 = board5 = board6 = board7 = board8 = board9 = '';
}
