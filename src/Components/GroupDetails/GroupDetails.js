import React , {useEffect , useState} from 'react';
import { useParams } from "react-router-dom";
import "./groupDetails.css";
import Place from '../Place/Place';
import PlaceLike from '../PlaceLike/PlaceLike';
import PlacesVoting from '../PlacesVoting/PlacesVoting';
import axios from "axios";
import AddingMember from '../AddMember/AddingMember';


const GroupDetails = ({ user, userGroup, updateGroupVoting }) => {

  const [places, setPlaces] = useState([])

  console.log(userGroup);

  // let { groupId } = useParams();
  let group = userGroup

  console.log(group);
  console.log(user);

  useEffect(() => {
    const fetchPlaces = async () => {
      let response = await axios.get(
        `http://localhost:4800/group/groupPlaces/${group._id}`
      );
      console.log(response.data);
      setPlaces(response.data)
    };
    fetchPlaces()
  }, []);

  return (
    <div>
      <div>
        <div>{group.name}</div>
        <div className="group-kind">{group.kind}</div>
        <br />
      </div>
      <div>
        {group.admin === user._id ? <AddingMember group={group} /> : null}
        <h4>Group Members:</h4>
        {group.members.map((m) => (
          <div>{m}</div>
        ))}
      </div>
      <div className="places-container">
      <h4>Places Suggested:</h4>
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
