const listOfSquares = document.querySelectorAll('.squares');
console.log(listOfSquares);

let ticTacToe = [['', '', ''], ['', '', ''], ['', '', '']]
let playerPiece = 'X'

//listOfSquares has to respond to clicks by the user 
//each square needs an event listener on click
//on click, replace '' on empty square with X or O
//run through win condition check
//if true, stop the function and return winner (to be displayed on board)
//else, turn ends and next player's turn starts (to be made into a function)
//loop into line 7 and repeat 

let checkWinner = function (arr, currPlayer) {
    
    let rowWin = false;
        
        if ((arr[0][0] === currPlayer && arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2]) || 
    (arr[1][0] === currPlayer && arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2]) ||
    (arr[2][0] === currPlayer && arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2])) {  
        rowWin = true;
    }

    let columnWin = false;
        if ((arr[0][0] === currPlayer && arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]) ||
    (arr[0][1] === currPlayer && arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]) ||
    (arr[0][2] === currPlayer && arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2])) {
        columnWin = true;
    }

    let diagonalWin = false;
        if ((arr[0][0] === currPlayer && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) ||
    (arr[2][0] === currPlayer && arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2])){
        diagonalWin = true;
    }
    

    if (rowWin == true || columnWin == true || diagonalWin == true) {
        return true;
    } else { 
        return false;
    }
    
}


const onSquareClick = function (event) {
    this.innerHTML = playerPiece; 
    //console.log(this.id);
    let j = parseInt(this.id) % 3; //(i * 3) + j(Remainder) = this.id 
    let i = (parseInt(this.id) - j) / 3;
    ticTacToe[i][j] = playerPiece;
    console.log(ticTacToe);
    if (checkWinner(ticTacToe, playerPiece)) { 
        resetGame();
        alert(`Player ${playerPiece} wins!`);
        
    } else {
       
        if (checkDraw()) {
            alert(`It's a draw!`);
            resetGame();
        }
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

let resetGame = function () {
    for (let i = 0; i < listOfSquares.length; i++) {
        listOfSquares[i].innerHTML = ''; 
    }
    playerPiece = 'X';
    ticTacToe = [['', '', ''], ['', '', ''], ['', '', '']];
}

let checkDraw = function () {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (ticTacToe[i][j] == '') {
                return false;
            }
        }
    }
    return true;
}

for (let i = 0; i < listOfSquares.length; i++) {
    //add onClick to each square
    //console.log to check if onclick works
    //check if specific element (item inside the array) is retrieved
    console.log(listOfSquares[i]);
    listOfSquares[i].addEventListener('click', onSquareClick)
    
}

