import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'




function getOptions(coordinates) {
    console.log(coordinates);
    const options = {
        method: 'GET',
        params: {
            latitude: `${coordinates.lat}`,
            longitude: `${coordinates.lng}`,
            limit: '15',
        },
        headers: {
            'X-RapidAPI-Key': '35e2779093mshade0682a7bdf5f6p115fbcjsn9011c4d71063',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    return options
}

async function getPlaces(coordinates) {
    try {
        const response = await axios.request(getOptions(coordinates));
	    console.log(response.data);
        return response
    } catch (error) {
        console.log(error);
        return null 
    }
}


export default getPlaces