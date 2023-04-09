const listOfSquares = document.querySelectorAll('.grids-squares');
const outputMsg = document.querySelector('.result');
let button = document.querySelector(".button");


let ticTacToe = [['', '', ''], ['', '', ''], ['', '', '']]
let playerPiece = 'X'
let gameState = true; 

//Runs through the ticTacToe 2D array to check for all winning combinations 
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
    if ((this.innerHTML != ' ') || gameState === false) {
        return;
    }
    this.innerHTML = playerPiece;
    let j = parseInt(this.id) % 3; //(i * 3) + j(Remainder) = this.id 
    let i = (parseInt(this.id) - j) / 3;
    ticTacToe[i][j] = playerPiece;
    if (checkWinner(ticTacToe, playerPiece)) { 
        outputMsg.innerHTML = `Player ${playerPiece} wins!`;
        gameState = false;
     
    } else {
       
        if (checkDraw()) {
            outputMsg.innerHTML = `It's a draw!`;
            gameState = false;
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
        listOfSquares[i].innerHTML = ' '; 
    }
    ticTacToe = [['', '', ''], ['', '', ''], ['', '', '']];
    outputMsg.innerHTML = " ";
    gameState = true;
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

//assigning click event listeners to all 9 grids
for (let i = 0; i < listOfSquares.length; i++) {
    listOfSquares[i].addEventListener('click', onSquareClick)
    
}

button.addEventListener('click', resetGame);

