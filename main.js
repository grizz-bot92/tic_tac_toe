
const gameBoard = (function(){
    const board =  [[' ', ' ', ' '],
                    [' ', ' ', ' '],
                    [' ', ' ', ' ']
                ]
                
    const getBoard = () => board
    
    const setBoard = (rows, cols, value) => {
        board[rows][cols] = value
    }

    return {getBoard, setBoard}

})();


function createPlayers(playerOne, playerTwo){
    return [
    {
        name: playerOne,
        symbol: 'X'
    },
    {
        name: playerTwo,
        symbol: 'O'
    }
];

}

function playRound(playerOne, playerTwo){

    const players = createPlayers(playerOne, playerTwo);

    let activePlayer = players[0]

    const switchPlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    };

    const getActivePlayer = () => activePlayer;

    const isValidmove = (row, col) => {
        const board = gameBoard.getBoard();
        return board[row][col] === ' ';
    }

    const makeMove = (row, col) => {
        if(isValidmove(row, col)){
            gameBoard.setBoard(row, col, activePlayer.symbol);
            console.log(`${activePlayer.name} placed ${activePlayer.symbol}`);
            const winner = checkWinner(gameBoard.getBoard());
            
            if(winner){
                console.log("Congratulations you win nothing!")
            } else {
                switchPlayer();
            }
        } else {
            console.log("Invalid move!")
        }
    }; 
    return {makeMove, getActivePlayer}
}
    
    


function checkWinner(board){
    for(let i = 0; i < 3; i++){
        if (board[i][0] !== '' && board[i][0] == board[i][1] && board[i][1] == board[i][2]){
            return board[i][0]
        }
        if (board[0][i] !== '' && board[0][i] == board[1][i] && board[1][i] == board[2][i]){
            return board[0][i]
        }
        if (board[0][0] !== '' && board[0][0] == board[1][1] && board[1][1] == board[2][2]){
            return board[0][0]
        }
        if (board[0][2] !== '' && board[0][2] == board[1][1] && board[1][1] == board[2][0]){
            return board[0][i]
        }

    }    
            
}

// function playGame()

// }


const game = playRound('Brandon', 'Tim');

game.makeMove(0,0)
console.log(gameBoard.getBoard())
game.makeMove(2,2)
// const board = gameBoard.getBoard();
// console.log(board);


















