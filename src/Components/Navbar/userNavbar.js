import React , {useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './navbar.css';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaUsers , FaSearch , FaSignOutAlt  } from 'react-icons/fa';
import MyGroups from '../MyGroups/MyGroups';
import SearchComponent from '../Search/Search';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function UserNavbar({user, userGroups, updateUserState ,updateCoordinates,updateUser}) {
  
  const [showForm, setShowForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  function handleShowGroupClick() {
    setShowForm(true);
    setShowSearch(false)

  }

  function handleLogOut(){
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    navigate("/")
  }

  const [currentUser , setCurrentUser] = useState({
    _id: "",
    userName: "",
    email: "",
    password: "",
    groups: [],
    favorites: [],
  })

  useEffect(() => {
    const fetchUser = async function (){
      if(localStorage.userId != undefined){
        const response = await axios.get(
          `http://localhost:4800/user/users/${localStorage.getItem('userId')}`
        )
        console.log(response.data);
        setCurrentUser(response.data)
        updateUser(response.data)
      }
    
  }
  fetchUser()
},[])
  console.log(currentUser);

  function handleSearch(){
    setShowSearch(true)
    setShowForm(false);
  }

  return (
    <div className="Sidebar">
      <div className="Sidebar-header">
        <h2>Welcome {currentUser.userName}</h2>
      </div>
      <div className="Sidebar-content">
      <Form onSubmit={e => { e.preventDefault();}}>
          <Button variant="outline-secondary" onClick={handleSearch}>
          <FaSearch /> Search
          </Button>
      </Form>
        <Form className='logOut' onSubmit={e => { e.preventDefault();}}>
          <Button variant="outline-secondary" onClick={handleShowGroupClick}>
          <FaUsers /> Show My Groups
          </Button>
      </Form>

      <Form onSubmit={e => { e.preventDefault();}}>
          <Button variant="outline-secondary" onClick={handleLogOut}>
          <FaSignOutAlt  /> LogOut
          </Button>
      </Form>
      </div>
      
      {showForm && <MyGroups user={user} userGroups={userGroups} updateUserState={updateUserState}  />}   
      {showSearch && <SearchComponent  userGroups={userGroups} updateCoordinates = {updateCoordinates}/>}   

      </div>
    );
}
