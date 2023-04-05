// let ticTacToe = [['', '', ''], ['', '', ''], ['', '', '']]
//column = [j]; row = [i]

// arr[0][0] = document.getElementById('grid1');
// arr[0][1] = document.getElementById('grid2');
// arr[0][2] = document.getElementById('grid3');
// arr[1][0] = document.getElementById('grid4');
// arr[1][1] = document.getElementById('grid5');
// arr[1][2] = document.getElementById('grid6');
// arr[2][0] = document.getElementById('grid7');
// arr[2][1] = document.getElementById('grid8');
// arr[2][2] = document.getElementById('grid9');




let winnerO = function (arr) {
    
    let rowWin = false
        
        if ((arr[0][0] === 'O' && arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2]) || 
    (arr[1][0] === 'O' && arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2]) ||
    (arr[2][0] === 'O' && arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2])) {  
        rowWin = true
    }

    let columnWin = false
    if ((arr[0][0] === 'O' && arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]) ||
    (arr[0][1] === 'O' && arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]) ||
    (arr[0][2] === 'O' && arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2])) {
        columnWin = true
    }

    let diagonalWin = false
    if ((arr[0][0] === 'O' && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) ||
    (arr[2][0] === 'O' && arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2])){
        diagonalWin = true
    }
    

    if (rowWin == true || columnWin == true || diagonalWin == true) {
        console.log(rowWin, columnWin, diagonalWin);
        return (`Player O is the winner!`) 
    }
    // console.log(rowWin, columnWin, diagonalWin);
}

//repeat for checking X

let winnerX = function (arr, currPlayer) {
    
    let rowWin = false
        
        if ((arr[0][0] === 'X' && arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2]) || 
    (arr[1][0] === 'X' && arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2]) ||
    (arr[2][0] === 'X' && arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2])) {  
        rowWin = true
    }
        console.log(rowWin);

    let columnWin = false
    if ((arr[0][0] === 'X' && arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]) ||
    (arr[0][1] === 'X' && arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]) ||
    (arr[0][2] === 'X' && arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2])) {
        columnWin = true
    }

    let diagonalWin = false
    if ((arr[0][0] === 'X' && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) ||
    (arr[2][0] === 'X' && arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2])){
        diagonalWin = true
    }
    

    if (rowWin == true || columnWin == true || diagonalWin == true) {
        console.log(rowWin, columnWin, diagonalWin);
        return (`Player O is the winner!`)
        //display winner name on board; return true/false
    }
    
}

let checkWinner = function (arr, currPlayer) {
    
    let rowWin = false
        
        if ((arr[0][0] === currPlayer && arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2]) || 
    (arr[1][0] === currPlayer && arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2]) ||
    (arr[2][0] === currPlayer && arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2])) {  
        rowWin = true
    }

    let columnWin = false
    if ((arr[0][0] === currPlayer && arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]) ||
    (arr[0][1] === currPlayer && arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]) ||
    (arr[0][2] === currPlayer && arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2])) {
        columnWin = true
    }

    let diagonalWin = false
    if ((arr[0][0] === currPlayer && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) ||
    (arr[2][0] === currPlayer && arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2])){
        diagonalWin = true
    }
    

    if (rowWin == true || columnWin == true || diagonalWin == true) {
        console.log(rowWin, columnWin, diagonalWin);
        return (`Player O is the winner!`) 
    }
    // console.log(rowWin, columnWin, diagonalWin);
}
let ticTacToe = [['', '', ''], ['', '', ''], ['', '', '']]
let playerPiece = 'X'


// TURN LOGIC START
// player put piece on board code eventListener on click
// runs through winning condition function
if (checkWinner(ticTacToe, playerPiece) == true) {
    //display winner name on board
} else {
    //switch turn, the next player continues
    if (playerPiece == 'X') {
        playerPiece = 'O' 
    } else if (playerPiece == 'O') {
        playerPiece = 'X'
    }
}

// TURN LOGIC END

winnerO([['X', 'X', 'O'], ['O', 'X', 'O'], ['O', 'O', 'X']]);
winnerX([['X', 'X', 'O'], ['O', 'X', 'O'], ['O', 'O', 'X']])










// const gridsOnClick = document.querySelectorAll('grids');
// console.log(gridsOnClick);





//event listeners
let grid1Click = document.getElementById('grid1');  
const onGrid1Click = function (event) {
    grid1Click.innerHTML = playerPiece; // in to 
    // Update the Tic Tac Toe array HINT: ticTacToe[i][j] = DEFINE ONE BY ONE eg grid1 = [0][0]
    // TURN LOGIC
    if (checkWinner(ticTacToe, playerPiece) == true) {
        //display winner name on board; stop function from running using return
    } else {
        //switch turn, the next player continues (condense below into a func)
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

grid1Click.addEventListener('click', onGrid1Click);

//FURTHER WAYS TO DRY IT: CAN THIS ABOVE BE MADE A FUNC, SINCE I AM REPEATING IT 8 TIMES?
//ticTacToe = instead of defining it 9 times, is there a DRYer way to do it?

let grid2Click = document.getElementById('grid2');  
const onGrid2Click = function (event) {
    grid2Click.innerHTML = playerPiece;
    // Update the Tic Tac Toe array HINT: ticTacToe[i][j] = DEFINE ONE BY ONE eg grid1 = [0][0]
    // TURN LOGIC
    if (checkWinner(ticTacToe, playerPiece) == true) {
        //display winner name on board
    } else {
        //switch turn, the next player continues
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

grid2Click.addEventListener('click', onGrid2Click);

let grid3Click = document.getElementById('grid3');  
const onGrid3Click = function (event) {
    grid3Click.innerHTML = playerPiece;
    // Update the Tic Tac Toe array HINT: ticTacToe[i][j] = DEFINE ONE BY ONE eg grid1 = [0][0]
    // TURN LOGIC
    if (checkWinner(ticTacToe, playerPiece) == true) {
        //display winner name on board
    } else {
        //switch turn, the next player continues
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

grid3Click.addEventListener('click', onGrid3Click);

let grid4Click = document.getElementById('grid4');  
const onGrid4Click = function (event) {
    grid4Click.innerHTML = playerPiece;
    // Update the Tic Tac Toe array HINT: ticTacToe[i][j] = DEFINE ONE BY ONE eg grid1 = [0][0]
    // TURN LOGIC
    if (checkWinner(ticTacToe, playerPiece) == true) {
        //display winner name on board
    } else {
        //switch turn, the next player continues
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

grid4Click.addEventListener('click', onGrid4Click);

let grid5Click = document.getElementById('grid5');  
const onGrid5Click = function (event) {
    grid5Click.innerHTML = playerPiece;
    // Update the Tic Tac Toe array HINT: ticTacToe[i][j] = DEFINE ONE BY ONE eg grid1 = [0][0]
    // TURN LOGIC
    if (checkWinner(ticTacToe, playerPiece) == true) {
        //display winner name on board
    } else {
        //switch turn, the next player continues
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

grid5Click.addEventListener('click', onGrid5Click);

let grid6Click = document.getElementById('grid6');  
const onGrid6Click = function (event) {
    grid6Click.innerHTML = playerPiece;
    // Update the Tic Tac Toe array HINT: ticTacToe[i][j] = DEFINE ONE BY ONE eg grid1 = [0][0]
    // TURN LOGIC
    if (checkWinner(ticTacToe, playerPiece) == true) {
        //display winner name on board
    } else {
        //switch turn, the next player continues
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

grid6Click.addEventListener('click', onGrid6Click);

let grid7Click = document.getElementById('grid7');  
const onGrid7Click = function (event) {
    grid7Click.innerHTML = playerPiece;
    // Update the Tic Tac Toe array HINT: ticTacToe[i][j] = DEFINE ONE BY ONE eg grid1 = [0][0]
    // TURN LOGIC
    if (checkWinner(ticTacToe, playerPiece) == true) {
        //display winner name on board
    } else {
        //switch turn, the next player continues
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

grid7Click.addEventListener('click', onGrid7Click);

let grid8Click = document.getElementById('grid8');  
const onGrid8Click = function (event) {
    grid8Click.innerHTML = playerPiece;
    // Update the Tic Tac Toe array HINT: ticTacToe[i][j] = DEFINE ONE BY ONE eg grid1 = [0][0]
    // TURN LOGIC
    if (checkWinner(ticTacToe, playerPiece) == true) {
        //display winner name on board
    } else {
        //switch turn, the next player continues
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

grid8Click.addEventListener('click', onGrid8Click);

let grid9Click = document.getElementById('grid9');  
const onGrid9Click = function (event) {
    grid9Click.innerHTML = playerPiece;
    // Update the Tic Tac Toe array HINT: ticTacToe[i][j] = DEFINE ONE BY ONE eg grid1 = [0][0]
    // TURN LOGIC
    if (checkWinner(ticTacToe, playerPiece) == true) {
        //display winner name on board
    } else {
        //switch turn, the next player continues
        if (playerPiece == 'X') {
            playerPiece = 'O' 
        } else if (playerPiece == 'O') {
            playerPiece = 'X'
        }
    }
}

grid9Click.addEventListener('click', onGrid9Click);