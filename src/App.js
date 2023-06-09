
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import React , { useState , useEffect} from 'react';
import Login from './Components/loginForm/Login';
import Landing from './Components/Landing/Landing';
import UserPage from './Components/userPage/userPage';
import GroupDetails from './Components/GroupDetails/GroupDetails';
import axios from 'axios';
import './Components/MapAndPlaces/map.css'
import Map from './Components/MapAndPlaces/map';
import Group from './Components/Group/group';
import OurTrip from './Components/OurTrip/OurTrip';
import AddMember from './Components/AddMember/AddingMember';

const App = () => {

  const [userGroups, setUserGroups] = useState([])
  const [user, setUser] = useState({})
  const [coordinates , setCoordinates] = useState({})

  function updateCoordinates(coordinates) {
    setCoordinates(coordinates)
  }


  const updateUser = async (user) => {
    console.log(user);
    setUser(user);
    const favoritesGroups = user.favorites
    const response = await axios.get(
      `http://localhost:4800/group/${user.userName}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const userGroupsData = response.data;
    updateUserGroups(userGroupsData, favoritesGroups);
  }
  

  const updateUserGroups = (userGroupsData, favoritesGroups) => {
    const groups = []
    userGroupsData.forEach(g => favoritesGroups.includes(g._id) ? groups.push(g) : null)
    userGroupsData.forEach(g => !favoritesGroups.includes(g._id) ? groups.push(g) : null)
    setUserGroups(groups);
  }

  const removeUserGroup = (userGroupId) => {
    const newUserGroups = [...userGroups]
    const newUserGroupsArr = newUserGroups.filter(ug => ug._id !== userGroupId)
    setUserGroups(newUserGroupsArr);
    let newUser = {...user}
    const newUserGroupsArray = newUser.groups
    const newUserGroupsRemovingGroup = newUserGroupsArray.filter(ug => ug._id !== userGroupId)
    newUser.groups = newUserGroupsRemovingGroup
    setUser(newUser);
  }


  const updateUserState = async (isFavorite, userGroupId) => {
    let newUser = {...user}
    if (isFavorite) {
      newUser.favorites.push(userGroupId)
    } else {
      let favorites = newUser.favorites.filter(GroupId => GroupId !== userGroupId);
      newUser.favorites = favorites
    }
    setUser(newUser);
  }

  const updateGroupVoting = async (isPlaceLiked, groupId, placeId) => {
    let newUserGroups = [...userGroups]
    let group = newUserGroups.filter(g => g._id === groupId)[0]
    let placeVoting = group.voting.filter(pv => pv.placeId === placeId)[0]
    if (!isPlaceLiked) {
      placeVoting.likes = placeVoting.likes + 1
      placeVoting.usersVotingId.push(user._id)
    } else {
      placeVoting.likes = placeVoting.likes - 1
      placeVoting.usersVotingId = placeVoting.usersVotingId.filter(uv => uv !== user._id)
    }
    group.voting.filter(pv => pv.placeId === placeId)[0] = placeVoting
    newUserGroups.filter(g => g._id === groupId)[0] = group
    setUser(newUserGroups);
  }

  return (
    <Router>
      <div>
      </div>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/signup" element={<SignUpForm updateUser={updateUser}/>} />
          <Route path="/login" element={<Login updateUser={updateUser}/>}/>
          <Route path="/userPage" element={<UserPage user={user} userGroups={userGroups} updateUserState={updateUserState} updateCoordinates = {updateCoordinates} coordinates = {coordinates} updateUser={updateUser} removeUserGroup={removeUserGroup} updateGroupVoting={updateGroupVoting}/>} />
          <Route path="/group" element={<Group/>}/>
          {/* <Route path='/groupDetails/:groupId' element={<GroupDetails user={user} userGroups={userGroups} updateGroupVoting={updateGroupVoting} />}></Route> */}
          <Route path='/ourTrip/:placeTitle' element={<OurTrip />}></Route>
          <Route path='/addMmber' element={<AddMember />}></Route>

        </Routes>
    </Router>
  );
}

export default App;