import React, { useState } from "react";


const GameBoard = ({ onSelectSq,board}) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbolSelect, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSq(rowIndex, colIndex)}
                  disabled={symbolSelect != null}
                >
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
