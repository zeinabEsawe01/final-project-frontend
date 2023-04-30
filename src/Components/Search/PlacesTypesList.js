import React from 'react';

const PlacesTypes = ['cafe','campground','city_hall','clothing_store','jewelry_store','zoo','store','restaurant','museum']

function PlacesList({setPlaceType}) {
    return (
        <div>
            <h5>Place Type:</h5>
            <select onChange={(e) => setPlaceType(e.target.value)}>
                {PlacesTypes.map(placeType => <option value={`${placeType}`}>{placeType}</option>)}
            </select>
        </div>
    )
}

export default PlacesList