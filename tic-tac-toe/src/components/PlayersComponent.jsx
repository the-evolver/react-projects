import { useState } from "react";

export default function PlayersComponent({playerName,symbol,active,updatePlayerName}){
  const [isEditing,setIsEditing] = useState(false);
  // const [activePlayerName,setActivePlayerName ] = useState(playerName);
  
  // function handlePlayerName(event){
  //   setActivePlayerName(event.target.value);
  // }

  return (
          <>
             
              <li className={active ? 'active' :undefined}> 
                <span className="player">
                {!isEditing  
                 ? <span className="player-name">{playerName}</span> 
                 : <input type="text" value={playerName} 
                    onChange={
                      (event) => updatePlayerName(event,symbol)
                    }></input>
                }
                <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={() => setIsEditing(!isEditing)}>{ isEditing ? "Save" : "Edit"}</button>
              </li> 
          
          </>
       );

}


