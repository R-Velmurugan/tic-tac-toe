import "./index.css";
import {useState} from "react";

var initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard({onSelectSquare , turns}){

    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square , playerSymbol} = turn;
        const {row , column} = square;

        gameBoard[row][column] = playerSymbol;
    }

    return(
        <ol id = "game-board">
            {gameBoard.map((row , rowIndex) => <li key = {rowIndex}>
                <ol>
                    {row.map((playerSymbol , columnIndex) => <li key = {columnIndex}>
                        <button onClick={() => {onSelectSquare(rowIndex , columnIndex)}}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}