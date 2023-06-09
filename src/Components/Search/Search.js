import React, { useState , useEffect } from 'react';
import AutocompletePlaces from '../MapAndPlaces/PlacesAutocomplete';
import PlacesTypes from './PlacesTypesList'
import Places from '../Places/Places';
import './search.css'


function SearchComponent({userGroups,updateCoordinates}) {
    const [places, setPlaces] = useState([]);
    const [placeType, setPlaceType] = useState('');
    const [coordinatesCopy, setCoordinatesCopy] = useState({});
    let placeInfo = {
      lat : coordinatesCopy.lat,
      lng : coordinatesCopy.lng,
      type : placeType
    }

    
    useEffect(() => {
      fetch(`http://localhost:4800/place/${placeInfo.lat}/${placeInfo.lng}/${placeInfo.type}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(placesData => placesData.json())
      .then(places => {setPlaces(places)})
    },[coordinatesCopy , placeType])

  
    return (
      <div>
        <div className='search-container'>
          <div className='Places-Search'>
            <AutocompletePlaces setCoordinates={updateCoordinates} setCoordinatesCopy = {setCoordinatesCopy}/>
            <PlacesTypes setPlaceType = {setPlaceType}/>
          </div>
          <Places places = {places} userGroups = {userGroups}/>
        </div>
      </div>
    );
  }
  
  
  export default SearchComponent;