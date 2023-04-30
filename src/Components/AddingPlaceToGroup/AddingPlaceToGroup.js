import React, { useState } from "react";
import "./addingPlaceToGroup.css";

const AddingPlaceToGroup = ({ place, userGroups }) => {
  
  const [selectedGroup , setSelectedGroup] = useState('')
  

  const placeInfo = {
    'place' : place,
    'group' : selectedGroup
  }

  const addPlaceSuggestion = async () =>{
    fetch(`http://localhost:4800/place`, {
      method: 'POST',
      body: JSON.stringify({placeInfo}),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
    })
  } 

  

  return (
    <div className="user-groups-container">
      <select className='user-groups' name="groups" id="groups" onChange={(e) => setSelectedGroup(e.target.value)}>
            { userGroups.map(g => 
                  <option value={g._id}>{g.name}</option>
                ) 
            }
      </select>
      <button onClick={addPlaceSuggestion}>Add suggestion</button>
    </div>
  );
};

export default AddingPlaceToGroup;
