
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import React , {useEffect , useState} from 'react';
import Login from './Components/loginForm/Login';
import Navbar from './Components/Navbar/userNavbar';
import Landing from './Components/Landing/Landing';
import UserPage from './Components/userPage/userPage';
import GroupDetails from './Components/GroupDetails/GroupDetails';
import FavoritesGroups from './Components/FavoritesGroups/FavoritesGroups';
import axios from 'axios';

import './Components/MapAndPlaces/map.css'
import Map from './Components/MapAndPlaces/map';
import Group from './Components/Group/group';
import MyGroups from './Components/MyGroups/MyGroups';
import SearchComponent from './Components/Search/Search';


const App = () => {

  
  const [userGroups, setUserGroups] = useState([])
  const [user, setUser] = useState({})

  const updateUser = async (user) => {
    setUser(user);
    console.log(user.userName);
    const response = await axios.get(
      `http://localhost:4800/group/${user.userName}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const userGroupsData = response.data;
    updateUserGroups(userGroupsData);
  }

  const updateUserGroups = (userGroupsData) => {
    setUserGroups(userGroupsData);
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

  return (
    
    <Router>
      <div>
      </div>
        <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/signup" element={<SignUpForm updateUser={updateUser}/>} />
        <Route path="/login" element={<Login updateUser={updateUser}/>}/>
        <Route path="/userPage" element={<UserPage user={user} userGroups={userGroups} updateUserState={updateUserState}/>} />
        {/* <Route path="/myGroups" element={<MyGroups userGroups={userGroups} user={user} updateUserState={updateUserState} />} /> */}
        <Route path="/group" element={<Group/>}/>
        <Route path='/groupDetails/:groupId' element={<GroupDetails userGroups={userGroups} />}></Route>
        {/* <Route path="/search" element={<SearchComponent />}/> */}


        </Routes>
    </Router>
  );
}

export default App;