import React, { useState } from 'react'
import UserNavbar from '../Navbar/userNavbar'
import "./sidebar.css";
import Search from '../Search/Search';
import GroupForm from '../Group/group_form';

export default function UserPage({user, userGroups}) {
    const [isOpen, setIsOpen] = useState(false);
    

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
        <UserNavbar user={user}/> 
        {/* <Search userGroups={userGroups} /> */}
        {/* <GroupForm user={user}/> */}
    </div>
        
  )
}
