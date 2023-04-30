import React, { useState } from "react";
import "./place.css";

const Place = ({ place, userGroups }) => {
  const [selectedGroup , setSelectedGroup] = useState('')

  const placeInfo = {
    'place' : place,
    'group' : selectedGroup
  }
  console.log(userGroups);
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
    <div>
      <span>{place.title}</span>
      <p className="place-description">{place.description}</p>
      <br />
      <img className="place-img" src={place.photos} alt="" />
      <br/>
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

export default Place;
