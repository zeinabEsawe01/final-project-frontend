import React from 'react';
import GoogleMapReact from 'google-map-react';


function Map(params) {

    const coordinates = {lat : 0 , lng : 0}

    return(
        <div className='mapContainer'>
            <GoogleMapReact
                bootstrapURLKeys={{key : 'AIzaSyCI3NIgwWTEiDrOWLxci2-lAw71YQjm4nw'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
            >
                
            </GoogleMapReact>
        </div>
    )
}

export default Map