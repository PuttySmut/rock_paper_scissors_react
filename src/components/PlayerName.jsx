import { useState } from 'react';
export default function PlayerName({initialName=" PLAYER 1 "}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName); 
    function handleEditPlayerName() {
        setIsEditing(true)
    }
    function handleSavePlayerName(event) {
        setPlayerName(event.target.value);
    }
    function handleFinishEditing() {
        setIsEditing(false);
    }
    return (
        <>
          {isEditing ? (
            <input 
                type="text"
                value={playerName}
                onChange={handleSavePlayerName}
                onBlur={handleFinishEditing}
            />
          ) : (
            <span onClick={handleEditPlayerName}>{playerName}</span>
          )}
          <button onClick={handleEditPlayerName}> Click to Edit name</button>
        </>
    );
}