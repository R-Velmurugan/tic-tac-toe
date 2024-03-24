import './App.css';
import Player from "./Player";
import GameBoard from "./GameBoard";
import {useState} from "react";

function App() {
    const [activePlayer , setActivePlayer] = useState("X");
    const [gameTurns , setGameTurns] = useState([]);

    function handleSelectSquare(row , column){
        setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
        setGameTurns((prevTurns) => {

            let currentPlayer = 'X';
            if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
                currentPlayer = 'O';
            }

            const updatedTurns = [
                {square : {row , column} , player : currentPlayer},
                ...prevTurns
            ];
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
        </>
    );
}

export default App;