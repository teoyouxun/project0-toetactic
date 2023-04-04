let ticTacToe = [['', '', ''], ['', '', ''], ['', '', '']]
//column = [j]; row = [i]


let winnerO = function (arr) {
    const ('' != '') // this doesn't work, but just thinking how to exclude thjis
    let rowWin = false     
        if ((arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2]) || 
    (arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2]) ||
    (arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2])) {  
        rowWin = true
    }
        console.log(rowWin);
    // ((arr[1][0]) === (arr[1][1]) === (arr[1][2])) ||
    // ((arr[2][0]) === (arr[2][1]) === (arr[2][2])))

    let columnWin = false
    if ((arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]) ||
    (arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]) ||
    (arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2])) {
        columnWin = true
    }

    let diagonalWin = false
    if ((arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) ||
    (arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2]))
        diagonalWin = true

    

    if (rowWin == true || columnWin == true || diagonalWin == true) {
        console.log(rowWin, columnWin, diagonalWin);
        // console.log(((arr[0][0]) == (arr[1][0]) == (arr[2][0])));
        // console.log(arr[0][0], arr[1][0], arr[2][0]);
        // return (`Player O is the winner!`) 
    }
    // console.log(rowWin, columnWin, diagonalWin);
}

// button.addEventListener('click', )

// For any given turn, check if function works, and what will the function return

winnerO([['X', 'X', 'O'], ['O', 'X', 'O'], ['', '', '']]);
// console.log('X' == 'O' == ''); //this is true, JS is so fucking stupid
// ('X' === 'O' === ''); this returns false 
// // X == O is false, but X/O == '' or ' ' is true
// console.log(false === '');

// let winnerX = function () {}


// turn[i]
// for (i = 4; i < game.length; i++) {

// }

//check win conditions from 5th turn onwards, checking win condition of player O/X on their respective turn only
//e.g. Turn 5, Player O's turn, button on click : innerText blank > O. Check win condition of player O only. 
// 
// 




