import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleActivePlayer() {
    setActivePlayer((curActive) => (
      curActive === 'X' ? "O" : "X"
    ));
    
  }
 
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer==="X"}/>
          <Player initialName="player 2" symbol="O" isActive={activePlayer==="O"}/>
        </ol>
        <GameBoard
          onSelectSq={handleActivePlayer}
          activePlayer={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
