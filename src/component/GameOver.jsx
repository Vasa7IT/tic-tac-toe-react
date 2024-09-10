import React from "react";

function handleRematch(){
    
}

const GameOver = ({winner}) => {
  return <div id="game-over">
    <h2>Game Over</h2>
    <p>{winner} won!</p>
    <p>
        <button onClick={handleRematch}>Rematch!</button>
    </p>
  </div>;
};

export default GameOver;
