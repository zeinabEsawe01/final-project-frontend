import React , {useEffect , useState} from 'react';
import { useParams } from "react-router-dom";
import "./groupDetails.css";
import Place from '../Place/Place';
import PlaceLike from '../PlaceLike/PlaceLike';
import PlacesVoting from '../PlacesVoting/PlacesVoting';
import axios from "axios";


const GroupDetails = ({ user, userGroups, updateGroupVoting }) => {

  const [places, setPlaces] = useState([])

  let { groupId } = useParams();
  let group = userGroups.filter((ug) => ug._id === groupId)[0];

  useEffect(() => {
    const fetchPlaces = async () => {
      let response = await axios.get(
        `/http://localhost:4800/group/groupPlaces/${group._id}`
      );
      setPlaces(response)
    };
    fetchPlaces()
  }, []);

  return (
    <div>
      <div>
        <span>{group.name}</span>
        <span className="group-kind">{group.kind}</span>
        <br />
      </div>
      <div>
        {group.members.map((m) => (
          <span>{m}</span>
        ))}
      </div>
      <div className="places-container">
        {places.map((p,index) =>
                        <div>
                           <Place  key={index}  place={p} />
                           <PlaceLike user={user} place={p} group={group} updateGroupVoting={updateGroupVoting} />
                        </div> 
        )} 
      </div>
      <PlacesVoting  places={places} group={group} />
    </div>
  );
};

export default GroupDetails;
