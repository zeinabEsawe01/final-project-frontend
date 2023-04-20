import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'

function Map() {

    const coordinates = {lat : 0 , lng : 0}

    return(
        <div className='mapContainer'>
            <GoogleMapReact
                bootstrapURLKeys={{key : 'AIzaSyCmA71mfPoPC7VemO1763C0pbZ-cROpTMQ'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                
            >
                
            </GoogleMapReact>
        </div>
    )
}

export default Map