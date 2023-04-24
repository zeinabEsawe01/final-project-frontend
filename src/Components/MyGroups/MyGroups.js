import "./myGroups.css";
import UserNavbar from "../Navbar/userNavbar";
import axios from "axios";
import React , {useEffect} from 'react';
import Group from "../Group/group";
import GroupForm from "../Group/group_form";


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
      <GroupForm />
        {userGroups.length > 0 ? userGroups.map((ug, index) => (
          <Group key={index} userGroup={ug} />
        )) : null}
      </div>
    </div>
  );
};

export default MyGroups;
