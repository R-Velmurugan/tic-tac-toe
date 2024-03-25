export default function GameOver({hasDraw , winner , handleRestart}){
    return(
        <div id = "game-over">
            <h2>Game Over</h2>
            {hasDraw && <p>GAME DRAW</p>}
            {winner && <p>{winner} has WON</p>}
            <button onClick={handleRestart}>Rematch?</button>
        </div>
    );
}