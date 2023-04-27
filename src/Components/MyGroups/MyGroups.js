import "./myGroups.css";
import React , {useEffect} from 'react';
import Group from "../Group/group";
import GroupForm from "../Group/group_form";
import { Link } from 'react-router-dom';


const MyGroups = ({ userGroups, user, updateUserState}) => {

  return (
    <div className="user-groups-container">
      <div id="user-groups">
      <GroupForm />
      <Link to={"/favoritesGroups"}> <button>favorites</button></Link>
        {userGroups.length > 0 ? userGroups.map((ug, index) => (
          <Group key={index} userGroup={ug} user={user} updateUserState={updateUserState} />
        )) : null}
      </div>
    </div>
  );
};

export default MyGroups;
