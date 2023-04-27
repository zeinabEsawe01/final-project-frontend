import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './navbar.css';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';
import GroupForm from '../Group/group_form';
import { FaUsers , FaSearch } from 'react-icons/fa';
import MyGroups from '../MyGroups/MyGroups';
import SearchComponent from '../Search/Search';



export default function UserNavbar({user, userGroups, updateUserState}) {
  const [showForm, setShowForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);


  function handleShowGroupClick() {
    setShowForm(true);
    setShowSearch(false)

  }

  function handleSearch(){
    setShowSearch(true)
    setShowForm(false);

  }

  return (
    <div className="Sidebar">
      <div className="Sidebar-header">
        <h2>Welcome {user.userName}</h2>
      </div>
      <div className="Sidebar-content">
      <Form onSubmit={e => { e.preventDefault();}}>
          <Button variant="outline-secondary" onClick={handleSearch}>
          <FaSearch /> Search
          </Button>
      </Form>
        <Form onSubmit={e => { e.preventDefault();}}>
          <Button variant="outline-secondary" onClick={handleShowGroupClick}>
          <FaUsers /> Show My Groups
          </Button>
      </Form>
      </div>
      
      
      {showForm && <MyGroups user={user} userGroups={userGroups} updateUserState={updateUserState}  />}   
      {showSearch && <SearchComponent  userGroups={userGroups} />}   

       </div>
    );
}
