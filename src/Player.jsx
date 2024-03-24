import {useState} from "react";

export default function Player({initialName , symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName , setIsPlayerName] = useState(initialName);

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing){
        editablePlayerName = <input type="text" className="player-name" value = {playerName} onChange={handleChange}/>
    }

    function handleClick(){
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setIsPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-id">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};