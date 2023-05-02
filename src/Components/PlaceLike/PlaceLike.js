import React , {useEffect , useState} from 'react';
import "./placeLike.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const PlaceLike = ({ user, place, group, updateGroupVoting }) => {
  const [isLiked, setIsLiked] = useState(false);
  console.log(place);
  useEffect(() => {
    if (group.voting.filter((v) => v.placeId === place._id)[0].usersVotingNames.includes(user.userName)) {
      setIsLiked(!isLiked);
    }
  }, []);

  const handleLikeClick = async () => {
    setIsLiked(!isLiked);
    let placeVoting = group.voting.filter(pv => pv.placeId === place._id)[0]
    if (!isLiked) {
      updateGroupVoting(isLiked, group._id, place._id)
      placeVoting.likes ++
      placeVoting.usersVotingNames.push(user.userName)
      group.voting.filter(pv => pv.placeId === place._id)[0] = placeVoting
      const res = await axios.put(
        `http://localhost:4800/group/voting/${user.userName}?add=true`,group
      );
    } else {
      updateGroupVoting(isLiked, group._id, place._id)
      placeVoting.likes --
      placeVoting.usersVotingNames = placeVoting.usersVotingNames.filter(uv => uv !== user.userName)
      group.voting.filter(pv => pv.placeId === place._id)[0] = placeVoting
      const res = await axios.put(
        `http://localhost:4800/group/voting/${user.userName}?add=false`,group
      );
    }
  };

  return (
    <button className={`like-button ${isLiked ? 'active' : ''}`} onClick={handleLikeClick}>
      <FontAwesomeIcon icon={faThumbsUp} />
    </button>
  );
};

export default PlaceLike;
