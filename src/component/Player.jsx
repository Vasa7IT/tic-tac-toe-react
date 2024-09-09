import React from "react";
import { useState } from "react";
const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    setIsEditing((isEdit) => !isEdit); //best practice
  }
  function handlePlayerName(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive?"active":undefined} >
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handlePlayerName}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
