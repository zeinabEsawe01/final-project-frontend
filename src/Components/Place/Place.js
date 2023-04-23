import React from "react";
import "./place.css";
import axios from 'axios';

const Place = ({ place, userGroups }) => {
  
  let selectedGroupTitle = ""
    
  const addPlaceSuggestion = async () =>{
     let group =  userGroups.filter(g => g.title === selectedGroupTitle)[0]
     group.places.push(place)
     const res = await axios.put(`/http://localhost:4800/group/${group._id}`, group);

  } 

  const handleChange = (e) => {
     selectedGroupTitle = e.target.value
  }

  return (
    <div className="place-container">
      <span>{place.title}</span>
      <p className="place-description">{place.description}</p>
      <br />
      <img className="place-img" src={place.img} alt="" />
      <br />
      <span className="place-location">{place.location}</span>
      <br />
      <div className='place-ratings'>
            { place.placeRatings.map((pr) => 
                  <div className='place-rating'>
                    <span className="place-ratings-type">{pr.type}</span>
                    <span className="place-ratings-value">{pr.ratingValue}</span>
                  </div>
                ) 
            }
      </div>
      <select className='user-groups' name="groups" id="groups" onChange={handleChange}>
            { userGroups.map(g => 
                  <option value={g.title}>{g.title}</option>
                ) 
            }
      </select>
      <button onClick={addPlaceSuggestion}>Add suggestion</button>
    </div>
  );
};

export default Place;
