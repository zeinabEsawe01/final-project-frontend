import React , {useEffect , useState} from 'react';
import { useParams } from "react-router-dom";
import "./groupDetails.css";
import axios from "axios";

const GroupDetails = ({ userGroups }) => {
  let { groupId } = useParams();
  const [places, setPlaces] = useState([])
  let group = userGroups.filter((ug) => ug._id === groupId);
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
        {group[0].members.map((m) => (
          <span>{m}</span>
        ))}
      </div>
      <div className="places-container">
        {places.map(p =>
                        <div>
                            <span>{p.title}</span>
                            <span className='place-description'>{p.description}</span><br />
                            <img className='place-img' src={p.img} alt="" /><br />
                        </div> 
                        )} 
      </div>
    </div>
  );
};

export default GroupDetails;
