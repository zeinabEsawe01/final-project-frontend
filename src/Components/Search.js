import React, { useState } from 'react';
import places from '../mock-data/mock-data'; // Import the array of places

function SearchComponent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchButtonClick = () => {
      // Filter the array of places based on the search query
      const filteredPlaces = places.places.filter((place) =>
        place.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredPlaces);
    };
  
    return (
      <div>
        <input type="text" placeholder="Type to search..." onChange={handleSearchInputChange} />
        <button onClick={handleSearchButtonClick}>Search</button>
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title} , {result.location}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  
  export default SearchComponent;