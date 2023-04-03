(030423) COMING SOON! STAY TUNED FOR FURTHER UPDATES THIS WEEK 


How to play - steps for each player, win conditions


html template for ttt

O and X

9 buttons, 9 squares

JS to do

What is Tic Tac Toe?

It is a turn-based game played by 2 players. The first player to form a horizontal, vertical or diagonal row of 3 of their own markers wins. Players also have to attempt to prevent the opponent from achieving the same objective, by blocking their opponent from lining up 3 of their own markers in a row. 

The game can result in a win-lose, or a draw. // (JS: create if statements to display which side won/draw)

Structural setup:
Setup of 3 x 3 boxes, all type = buttons. All will have event listeners each on click, to display markers O and X turn by turn respectively. 
When XXX or OOO > function {game ends and winner is declared} ;
otherwise (else) declare draw when all 9 boxes filled with no straight row of 3 same markers


Aesthetics (CSS):
9 boxes
Lines to separate the boxes 

Without referencing to online tic-tac-toe templates,
(i) Should I class/id tag them individually? I am of the opinion that all buttons be id'ed button1 - button9 for future reference. 


event listeners on buttons (on click) - either X or O, when one is clicked, next will be opposite marker respectively





Your app must:
Render a game board in the browser
Switch turns between X and O (or whichever markers you select)
Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
Use Javascript for DOM manipulation
Deploy your game online, where the rest of the world can access it
Use semantic markup for HTML and CSS (adhere to best practices)