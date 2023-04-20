import React, { useState } from 'react'
import UserNavbar from '../Navbar/userNavbar'
import "./sidebar.css";
import Search from '../Search/Search';
import GroupForm from '../Group/group_form';

export default function UserPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [userGroups, setUserGroups] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
        <UserNavbar/> 
        <Search userGroups={userGroups} />
        <GroupForm/>
    </div>
        
  )
}
