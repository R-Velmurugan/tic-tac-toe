import './App.css';
import Player from "./Player";
import GameBoard from "./GameBoard";
import {useState} from "react";

function App() {
    const [activePlayer , setActivePlayer] = useState("X");

    function handleSelectSquare(){
        setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
    }

  return (
    <>
        <div id="game-layout">
            <ol id="players" className="highlight-player">
                <Player  initialName = "Player1" symbol="X" isActive = {activePlayer === "X"}/>
                <Player  initialName = "Player2" symbol="O" isActive = {activePlayer === "O"}/>
            </ol>
            <GameBoard onSelectSquare = {handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>
    </>
  );
}

export default App;
