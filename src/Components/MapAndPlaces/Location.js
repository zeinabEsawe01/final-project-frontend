import { useGoogleMap , Marker} from "@react-google-maps/api";
import { useState, useEffect, useRef } from "react";

function Location(params) {
    const [lat, setLat] = useState(43.68);
    const [lng, setLng] = useState(-79.43);
    const { map } = useGoogleMap();
    const markerRef = useRef();


    useEffect(() => {
        if (!map || markerRef.current) return;
        <Marker position={{ lat: 32.0853, lng: 34.7818 }} />
    }, [map]);

    useEffect(() => {
        if (!markerRef.current) return;
        if (isNaN(lat) || isNaN(lng)) return;
        markerRef.current.setPosition({ lat, lng });
        map.panTo({ lat, lng });
    }, [lat, lng, map]);


    return (
        <div className="lat_lng_inputs">
            <input
                type="number"
                value={lat}
                onChange={(event) => setLat(parseFloat(event.target.value))}
                step={0.01}
            />
            <input
                type="number"
                value={lng}
                onChange={(event) => setLng(parseFloat(event.target.value))}
                step={0.01}
            />
    </div>
    )
}


export default Location
