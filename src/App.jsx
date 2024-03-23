import './App.css';
import Player from "./Player";

function App() {

  return (
    <>
        <div id="game-board">
            <div id="players">
                <Player  initialName = "Player1" symbol="X"/>
                <Player  initialName = "Player2" symbol="O"/>
            </div>
        </div>
    </>
  );
}

export default App;
