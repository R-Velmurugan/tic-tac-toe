import "./index.css";
import {useState} from "react";

var initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard({onSelectSquare , activePlayerSymbol}){

    const [gameBoard , setGameBoard] = useState(initialGameBoard)

    function handleClick(rowIndex , columnIndex){
        setGameBoard((prevGameBoard) => {
           let updatedGameBoard =  [...prevGameBoard.map(innerArray => [...innerArray])];
           updatedGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
           return updatedGameBoard;
        });

        onSelectSquare();
    }

    return(
        <ol id = "game-board">
            {gameBoard.map((row , rowIndex) => <li key = {rowIndex}>
                <ol>
                    {row.map((playerSymbol , columnIndex) => <li key = {columnIndex}>
                        <button onClick={() => {handleClick(rowIndex , columnIndex)}}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}