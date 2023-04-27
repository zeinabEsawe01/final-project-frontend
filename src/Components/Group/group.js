import React , {useEffect , useState} from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./group.css"
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


export default function Group({user, userGroup, updateUserState}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user.favorites.includes(userGroup._id)) {
      setIsFavorite(!isFavorite);
    }
  }, []);
  
  const handleFavoriteClick = async () => {
     setIsFavorite(!isFavorite);
    if (!isFavorite) {
      updateUserState(isFavorite, userGroup._id)
      const res = await axios.put(`http://localhost:4800/user/${user._id}?groupId=${userGroup._id}&add=true`);
    } else {
      updateUserState(isFavorite, userGroup._id)
      const res = await axios.put(`http://localhost:4800/user/${user._id}?groupId=${userGroup._id}&add=false`);
    }
  };
  try {
    return (
    <div>
      <div className="catalog-item">
      
      <div className="catalog-item-info">
        <FaUsers size={32}/>
        <Link to={`/groupDetails/${userGroup._id}`}><h2>{userGroup.name}</h2></Link>
        <button className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={handleFavoriteClick}>
        <FontAwesomeIcon icon={faHeart} />
      </button>
        </div>
      </div>
    </div>
  )}
  catch(err){
    console.log(err);

  }
}
