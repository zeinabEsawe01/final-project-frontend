import "./myGroups.css";
import React , {useState} from 'react';
import Group from "../Group/group";
import GroupForm from "../Group/group_form";
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


const MyGroups = ({ user, userGroups, updateUserState}) => {
  
  const [showForm, setShowForm] = useState(false);

  function handleCreateGroupClick() {
    setShowForm(true);
  }
  return (
    <div className="user-groups-container">
      <div id="user-groups">
        {console.log(userGroups)}
        {userGroups.length > 0 ? userGroups.map((ug, index) => (
          <Group key={index} user={user} userGroup={ug} updateUserState={updateUserState} />
        )) :  <p><h5>You don't have any group Yet, </h5>
        make one and let's start sharing</p>}
        <Form onSubmit={e => { e.preventDefault();}}>
          <Button variant="outline-secondary" onClick={handleCreateGroupClick}>
            <BsPlus /> Create New Group
          </Button>
      </Form>
      </div>
      {showForm && <GroupForm user={user} setShowForm={setShowForm} />} 

    </div>
  );
};

export default MyGroups;