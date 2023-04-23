import React from "react";
import "./myGroups.css";
import UserNavbar from "../Navbar/userNavbar";
import axios from "axios";

const MyGroups = ({ userGroups, updateUserGroups, user }) => {

  useEffect(() => {
    async function fetchUserGroups() {
      const response = await axios.get(
        `/http://localhost:4800/group/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const userGroupsData = response.data;
      updateUserGroups(userGroupsData);
    }
    fetchUserGroups();
  }, []);

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
