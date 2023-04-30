import React from "react";
import "./addingPlaceToGroup.css";
import axios from 'axios';

const AddingPlaceToGroup = ({ place, userGroups }) => {
  
  let selectedGroupTitle = ""
    
  const addPlaceSuggestion = async () =>{
     let group =  userGroups.filter(g => g.title === selectedGroupTitle)[0]
     group.places.push(place)
     group.voting.push({ placeId : place._id, likes : 0, usersVotingId : [] })
     const res = await axios.put(`/http://localhost:4800/group/${group._id}`, group);
  } 

  const handleChange = (e) => {
      selectedGroupTitle = e.target.value
  }

  return (
    <div className="user-groups-container">
      <select className='user-groups' name="groups" id="groups" onChange={handleChange}>
            { userGroups.map(g => 
                  <option value={g.name}>{g.name}</option>
                ) 
            }
      </select>
      <button onClick={addPlaceSuggestion}>Add suggestion</button>
    </div>
  );
};

export default AddingPlaceToGroup;
