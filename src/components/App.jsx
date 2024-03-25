import './App.css';
import Player from "./Player";
import GameBoard from "./GameBoard";
import {useState} from "react";
import Log from "./Log";

function deriveActivePlayer(gameTurns){
    let currentActivePlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentActivePlayer = 'O';
    }
    return currentActivePlayer;
}
function App() {
    const [gameTurns , setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);
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

    return (
        <>
            <div id="game-layout">
                <ol id="players" className="highlight-player">
                    <Player  initialName = "Player1" symbol="X" isActive = {activePlayer === "X"}/>
                    <Player  initialName = "Player2" symbol="O" isActive = {activePlayer === "O"}/>
                </ol>
                <GameBoard onSelectSquare = {handleSelectSquare} turns={gameTurns}/>
            </div>

            <Log turns = {gameTurns}/>
        </>
    );
}

export default App;