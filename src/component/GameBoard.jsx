import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSq, activePlayer }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectBoard(rowIndex, colIndex) {
    setGameBoard((prevGame) => {
      const updateGame = [...prevGame.map((innerArr) => [...innerArr])];
      updateGame[rowIndex][colIndex] = activePlayer;
      return updateGame;
    });

    onSelectSq();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbolSelect, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectBoard(rowIndex, colIndex)}>
                  {symbolSelect}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
