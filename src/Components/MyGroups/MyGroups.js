import "./myGroups.css";
import React , {useEffect} from 'react';
import Group from "../Group/group";
import GroupForm from "../Group/group_form";


const MyGroups = ({ userGroups}) => {

  return (
    <div className="user-groups-container">
      <div id="user-groups">
      <GroupForm />
        {userGroups.length > 0 ? userGroups.map((ug, index) => (
          <Group key={index} userGroup={ug} />
        )) : null}
      </div>
    </div>
  );
};

export default MyGroups;
