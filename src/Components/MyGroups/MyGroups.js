import "./myGroups.css";
import React , {useEffect, useState} from 'react';
import Group from "../Group/group";
import GroupForm from "../Group/group_form";
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


const MyGroups = ({ user, userGroups, updateUserState, updateGroups, removeUserGroup}) => {
  const [showForm, setShowForm] = useState(false);
  const [currentGroups , setCurrentGroups] = useState([]);

  function handleCreateGroupClick() {
    setShowForm(true);
  }



  return (
    <div className="user-groups-container">
      <Form onSubmit={e => { e.preventDefault();}}>
          <Button variant="outline-secondary" onClick={handleCreateGroupClick}>
            <BsPlus /> Create New Group
          </Button>
      </Form>
      <div id="user-groups">
        {console.log(userGroups)}
        {userGroups.length > 0 ? userGroups.map((ug, index) => (
          <Group key={index} user={user} userGroup={ug} updateUserState={updateUserState} removeUserGroup={removeUserGroup} />
        )) :  <p><h5>You don't have any group Yet, </h5>
        make one and let's start sharing</p>}
        
      </div>
      {showForm && <GroupForm user={user} setShowForm={setShowForm} />} 

    </div>
  );
};

export default MyGroups;