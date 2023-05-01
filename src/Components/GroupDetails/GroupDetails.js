import React , {useEffect , useState} from 'react';
import { useParams } from "react-router-dom";
import "./groupDetails.css";
import Place from '../Place/Place';
import PlaceLike from '../PlaceLike/PlaceLike';
import PlacesVoting from '../PlacesVoting/PlacesVoting';
import axios from "axios";
import AddingMember from '../AddMember/AddingMember';


const GroupDetails = ({ user, userGroup, updateGroupVoting , userGroupId}) => {

  const [places, setPlaces] = useState([])

  console.log(userGroup);

  // let { groupId } = useParams();
  let group = userGroup

  console.log(group);
  console.log(user);

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
        <div className=''></div>
        {group.admin === user._id ? <AddingMember group={group} /> : null}
        {group.members.map((m) => (
          <div>{m}</div>
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
