import usePlacesAutocomplete , {getGeocode , getLatLng} from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";


function AutocompletePlaces({setCoordinates,setCoordinatesCopy}) {
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions} = usePlacesAutocomplete();
    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
    
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setCoordinates({ lat, lng });
        setCoordinatesCopy({lat, lng})
    };

    return (
        <Combobox onSelect={handleSelect}>
            <h5>Place:</h5>
            <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready} placeholder="Type to search..."/>
            <ComboboxPopover>
            <ComboboxList>
                {status === "OK" &&
                    data.map(({ place_id, description }) => (
                    <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}


export default AutocompletePlaces