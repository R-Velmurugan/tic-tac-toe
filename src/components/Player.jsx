import {useState} from "react";

export default function Player({initialName , symbol , isActive , onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName , setIsPlayerName] = useState(initialName);

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing){
        editablePlayerName = <input type="text" className="player-name" value = {playerName} onChange={handleChange}/>
    }

    function handleClick(){
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol , playerName);
        }
    }

    function handleChange(event){
        setIsPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined} >
            <span className="player">
                {editablePlayerName}
                <span className="player-id">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};