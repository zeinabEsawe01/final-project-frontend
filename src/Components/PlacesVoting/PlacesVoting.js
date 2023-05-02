import React , {useEffect , useState} from 'react';
import "./placesVoting.css";
import { Link } from 'react-router-dom';

const PlacesVoting = ({ places, group }) => {

  const [placesvoting, setPlacesvoting] = useState([])

  let isAllUsersVoting = false

  useEffect(() => {
    let placesVotingArray = []
    placesVotingArray = places.map((p) => ({ title : p.title, likes : group.voting.filter(pv => pv.placeId === p._id)[0].likes }))
    placesVotingArray.sort((a, b) => b.likes - a.likes)
    setPlacesvoting(placesVotingArray)
  }, []);

  useEffect(() => {
    const usersVotingNames = new Set()
    group.voting.forEach(v => {
      v.usersVotingNames.forEach(uvn => usersVotingNames.add(uvn))
    });
    const groupMembers = group.members
    for (const groupMember of groupMembers) {
      if (!usersVotingNames.has(groupMember)) {
        isAllUsersVoting =  false
        break
      }
      isAllUsersVoting = true
    }
  }, []);

  return (
    <div>
      <div className="places-voting-container">
      {placesvoting.map((p) =>
                        <div>
                           <span>{p.title}</span>
                           <span>{p.likes}</span>
                        </div> 
      )} 
      </div>
      <div>
        {
          isAllUsersVoting ? <Link to={`/ourTrip/${placesvoting[0].title}`}><button>See your next trip</button></Link> : null
        }
      </div>
    </div>
  );
};

export default PlacesVoting;
