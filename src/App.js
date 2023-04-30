
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import React , { useState} from 'react';
import Login from './Components/loginForm/Login';
import Landing from './Components/Landing/Landing';
import UserPage from './Components/userPage/userPage';
import GroupDetails from './Components/GroupDetails/GroupDetails';
import axios from 'axios';
import './Components/MapAndPlaces/map.css'
import Map from './Components/MapAndPlaces/map';
import Group from './Components/Group/group';

const App = () => {

  const [userGroups, setUserGroups] = useState([])
  const [user, setUser] = useState({})
  const [coordinates , setCoordinates] = useState({})

  function updateCoordinates(coordinates) {
    setCoordinates(coordinates)
  }


  

  const updateUser = async (user) => {
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
    if (isPlaceLiked) {
      placeVoting.likes ++
      placeVoting.usersVotingId.push(user._id)
    } else {
      placeVoting.likes --
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
          <Route path="/userPage" element={<UserPage user={user} userGroups={userGroups} updateUserState={updateUserState} updateCoordinates = {updateCoordinates} coordinates = {coordinates}/>} />
          <Route path="/group" element={<Group/>}/>
          <Route path='/groupDetails/:groupId' element={<GroupDetails user={user} userGroups={userGroups} updateGroupVoting={updateGroupVoting} />}></Route>
        </Routes>
    </Router>
  );
}

export default App;