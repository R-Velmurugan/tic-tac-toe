import './App.css';
import Player from "./Player";
import GameBoard from "./GameBoard";
import {useState} from "react";
import Log from "./Log";
import {WINNING_COMBINATIONS} from "../winning-combinations";
import GameOver from "./GameOver";

var initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
function deriveActivePlayer(gameTurns){
    let currentActivePlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentActivePlayer = 'O';
    }
    return currentActivePlayer;
}
function App() {
    const [gameTurns , setGameTurns] = useState([]);
    const [players , setPlayers] = useState({'X':"Player1" , 'Y':"Player2"});
    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = [...initialGameBoard.map(array => [...array])];
    let winner , hasDraw;

    for(const turn of gameTurns){
        const {square , player} = turn;
        const {row , column} = square;

        gameBoard[row][column] = player;
    }

    for(const combination of WINNING_COMBINATIONS){
        let firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        let secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        let thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
            winner = players[firstSquareSymbol];
        }
    }

    if(gameTurns.length === 9 && (!winner)) hasDraw = true;

    function handleSelectSquare(row , column){
        setGameTurns((prevTurns) => {

            const currentActivePlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                {square : {row , column} , player : currentActivePlayer},
                ...prevTurns
            ];
            return updatedTurns;
        });
    }

    function handleRestart(){
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol , newName){
        setPlayers(prevPlayers => {
           return {
               ...prevPlayers,
               [symbol] : newName
           }
        });
    }

    return (
        <>
            <div id="game-layout">
                <ol id="players" className="highlight-player">
                    <Player  initialName = "Player1" symbol="X" isActive = {activePlayer === "X"} onChangeName = {handlePlayerNameChange}/>
                    <Player  initialName = "Player2" symbol="O" isActive = {activePlayer === "O"} onChangeName = {handlePlayerNameChange}/>
                </ol>
                {(hasDraw || winner) && <GameOver hasDraw={hasDraw} winner={winner} handleRestart={handleRestart}/>}
                <GameBoard onSelectSquare = {handleSelectSquare} board={gameBoard}/>
            </div>

            <Log turns = {gameTurns}/>
        </>
    );
}

export default App;