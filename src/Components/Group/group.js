import React , {useEffect , useState} from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./group.css"
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import GroupDetails from '../GroupDetails/GroupDetails';


export default function Group({user, userGroup, updateUserState, removeUserGroup}) {

  const [isFavorite, setIsFavorite] = useState(false);
  const [showGroup, setShowGroup] = useState(false);
console.log(user)

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

  const handleLeaveGroupClick = async () => {
   if (user._id === userGroup.admin) {
     removeUserGroup(userGroup._id)
     const response = await axios.put(`http://localhost:4800/user/${user._id}?groupId=${userGroup._id}`);
     const res = await axios.delete(`http://localhost:4800/group/${userGroup._id}`);
   } else {
     removeUserGroup(userGroup._id)
     const response = await axios.put(`http://localhost:4800/user/${user._id}?groupId=${userGroup._id}`);
     const res = await axios.put(`http://localhost:4800/group/members/${userGroup._id}?userName=${user.userName}`);
   }
 };

 function handleShowGroup(){
  setShowGroup(true)
 }
 console.log(userGroup);

    return (
    <div>
      <div className="catalog-item">
      <Form onSubmit={e => { e.preventDefault();}}>
      <div className="catalog-item-info">
        <FaUsers size={38}/>
          <Button variant="outline-secondary" onClick={handleShowGroup}>
          {userGroup.name}
          </Button>
        {/* <Link to={`/groupDetailusersVotingNamess/${userGroup._id}`}><h2>{userGroup.name}</h2></Link> */}
        <button className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={handleFavoriteClick}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="leave-group" onClick={handleLeaveGroupClick}>
          Leave group
        </button>
        </div>
        </Form>
      </div>
      {showGroup && <GroupDetails user={user} userGroup={userGroup} userGroupId = {userGroup._id}/>}
    </div>
  )

}
