import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  
  function handleEditClicked() {
    setIsEditing((editing)=> !editing);
    
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
    onChangeName(symbol, event.target.value);
  }

  let editablePlayerName= <span className="player-name">{playerName}</span>;
  if (isEditing){
    editablePlayerName = (
        <input 
            type='text'
            required
            // defaultValue={name}
            onChange={handleChange}
            value={playerName}
        />
    );
  }

  return (
    <li className={isActive? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClicked}>{isEditing? 'Save' :'Edit'}</button>
    </li>
  );
}
