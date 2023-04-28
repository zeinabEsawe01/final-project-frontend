import { useState , useEffect } from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import AutocompletePlaces from "./PlacesAutocomplete";
import axios from "axios";
import './map.css'




const mapOptions = {
    zoom: 10,
    center: {
        lat: 32.0853,
        lng: 34.7818,
    },
};


export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyATcUPRpd0dtYZWBetco0_9cP3qYQ7Y3g8',
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const [coordinates , setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })


    return (
        <div>
            <AutocompletePlaces setCoordinates={setCoordinates}/>
            <GoogleMap center={coordinates}  options={mapOptions} mapContainerClassName="map-container">
                <Marker position={coordinates} />
            </GoogleMap>
        </div>
        
    );
}


