import React from "react";
import "./myGroups.css";
import UserNavbar from "../Navbar/userNavbar";

const MyGroups = ({ userGroups}) => {

  return (
    <div className="user-groups-container">
      <div id="user-groups">
        {userGroups.map((ug, index) => (
          <Group key={index} userGroup={ug} />
        ))}
      </div>
    </div>
  );
};

export default MyGroups;
