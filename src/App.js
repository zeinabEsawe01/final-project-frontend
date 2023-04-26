
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import React , {useEffect , useState} from 'react';
import Login from './Components/loginForm/Login';
import Navbar from './Components/Navbar/userNavbar';
import Landing from './Components/Landing/Landing';
import UserPage from './Components/userPage/userPage';
import GroupDetails from './Components/GroupDetails/GroupDetails';
import axios from 'axios';

import './Components/MapAndPlaces/map.css'
import Map from './Components/MapAndPlaces/map';
import Group from './Components/Group/group';
import MyGroups from './Components/MyGroups/MyGroups';


const App = () => {

  
  const [userGroups, setUserGroups] = useState([])
  const [user, setUser] = useState({})

  const updateUser = async (user) => {
    setUser(user.user);

    const response = await axios.get(
      `http://localhost:4800/group/${user.user.userName}`,
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

  return (
    
    <Router>
      <div>
      </div>
        <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/signup" element={<SignUpForm updateUser={updateUser}/>} />
        <Route path="/login" element={<Login updateUser={updateUser}/>}/>
        <Route path="/userPage" element={<UserPage user={user} userGroups={userGroups}/>} />
        <Route path="/myGroups" element={<MyGroups userGroups={userGroups} />} />
        <Route path="/group" element={<Group/>}/>
        <Route path='/groupDetails/:groupId' element={<GroupDetails userGroups={userGroups} />}></Route>

        </Routes>
    </Router>
  );
}

export default App;