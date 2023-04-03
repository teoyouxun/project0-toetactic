let ticTacToe = [['', '', ''], ['', '', ''], ['', '', '']]
//column = [j]; row = [i]


let winnerO = function (arr) {
    let rowWin = (((arr[0][0]) === (arr[0][1]) === (arr[0][2])) ||
    ((arr[1][0]) === (arr[1][1]) === (arr[1][2])) ||
    ((arr[2][0]) === (arr[2][1]) === (arr[2][2])))

    let columnWin = (((arr[0][0]) === (arr[1][0]) === (arr[2][0])) ||
    ((arr[0][1]) === (arr[1][1]) === (arr[2][1])) ||
    ((arr[0][2]) === (arr[1][2]) === (arr[2][2])))

    let diagonalWin = (((arr[0][0]) === (arr[1][1]) === (arr[2][2])) ||
    ((arr[2][0]) === (arr[1][1]) === (arr[0][2])))

    if (rowWin == true || columnWin == true || diagonalWin == true) {
        console.log(rowWin, columnWin, diagonalWin);
        // console.log(((arr[0][0]) == (arr[1][0]) == (arr[2][0])));
        // console.log(arr[0][0], arr[1][0], arr[2][0]);
        return (`Player O is the winner!`) 
    }
    console.log(rowWin, columnWin, diagonalWin);
}

// For any given turn, check if function works, and what will the function return

winnerO([['X', 'X', 'O'], ['O', 'X', 'O'], ['', '', '']]);
// console.log('X' == 'O' == ''); //this is true, JS is so fucking stupid
// ('X' === 'O' === ''); this returns false 
// // X == O is false, but X/O == '' or ' ' is true
// console.log(false === '');
// testing

// let winnerX = function () {}


// turn[i]
// for (i = 4; i < game.length; i++) {

// }

//check win conditions from 5th turn onwards, checking win condition of player O/X on their respective turn only
//e.g. Turn 5, Player O's turn, button on click : innerText blank > O. Check win condition of player O only. 
// 
// 




