const listOfSquares = document.querySelectorAll('.squares');
console.log(listOfSquares);


//listOfSquares has to respond to clicks by the user 
//each square needs an event listener on click
//on click, replace '' on empty square with X or O
//run through win condition check
//if true, stop the function and return winner (to be displayed on board)
//else, turn ends and next player's turn starts (to be made into a function)
//loop into line 7 and repeat 

const onSquareClick = function () {
    console.log('Hello');
}


for (let i = 0; i < listOfSquares.length; i++) {
    //add onClick to each square
    //console.log to check if onclick works
    //check if specific element (item inside the array) is retrieved
    console.log(listOfSquares[i]);
    listOfSquares[i].addEventListener('click', onSquareClick)

}

//onclick, retrieve html 
//


// console.log(onSquareClick());
// let grid6Click = document.getElementById('grid6');  
// const onGrid6Click = function (event) {
//     grid6Click.innerHTML = playerPiece;