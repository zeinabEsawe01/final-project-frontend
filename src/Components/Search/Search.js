import React, { useState } from 'react';
import placesData from '../../mock-data/mock-data'; // Import the array of places
import Places from '../Places/Places';

function SearchComponent({ userGroups}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [places, setPlaces] = useState([]);
  
    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchButtonClick = () => {
      // Filter the array of places based on the search query
      const filteredPlaces = placesData.places.filter((place) =>
        place.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // setSearchResults(filteredPlaces);
      setPlaces(filteredPlaces);
    };
  
    return (
      <div>
        <input type="text" placeholder="Type to search..." onChange={handleSearchInputChange} />
        <button onClick={handleSearchButtonClick}>Search</button>
        {places.length > 0 && (
          <Places places={places} userGroups={userGroups} />
        )}
      </div>
    );
  }
  
  
  export default SearchComponent;