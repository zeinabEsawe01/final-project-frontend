// import React , {useEffect , useState} from 'react';
// import { useParams } from "react-router-dom";
// import "./groupDetails.css";
// import Place from '../Place/Place';
// import axios from "axios";
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const GroupDetails = ({ userGroups }) => {

//   const [places, setPlaces] = useState([])
//   const [isLiked, setIsLiked] = useState(false);

//   let { groupId } = useParams();
//   let group = userGroups.filter((ug) => ug._id === groupId);

//   useEffect(() => {
//     if (user.favorites.includes(userGroup._id)) {
//       setIsLiked(!isLiked);
//     }
//   }, []);
  
//   useEffect(() => {
//     const fetchPlaces = async () => {
//       let response = await axios.get(
//         `/http://localhost:4800/group/groupPlaces/${group._id}`
//       );
//       setPlaces(response)
//     };
//     fetchPlaces()
//   }, []);

//   const handleFavoriteClick = async () => {
//     setIsLiked(!isLiked);
//    if (!isLiked) {
//      updateUserState(isLiked, userGroup._id)
//      const res = await axios.put(`http://localhost:4800/user/${user._id}?groupId=${userGroup._id}&add=true`);
//    } else {
//      updateUserState(isLiked, userGroup._id)
//      const res = await axios.put(`http://localhost:4800/user/${user._id}?groupId=${userGroup._id}&add=false`);
//    }
//  };

//   return (
//     <div>
//       <div>
//         <span>{group.name}</span>
//         <span className="group-kind">{group.kind}</span>
//         <br />
//       </div>
//       <div>
//         {group[0].members.map((m) => (
//           <span>{m}</span>
//         ))}
//       </div>
//       <div className="places-container">
//         {places.map(p =>
//                         <div>
//                            <Place  key={index}  place={p} />
//                            <button className={`favorite-button ${isLiked ? 'active' : ''}`} onClick={handleFavoriteClick}>
//                             <FontAwesomeIcon icon={faHeart} />
//                            </button>
//                         </div> 
//                         )} 
//       </div>
//     </div>
//   );
// };

// export default GroupDetails;
