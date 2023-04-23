import React, { useState } from 'react'
import UserNavbar from '../Navbar/userNavbar'
import "./sidebar.css";
import Search from '../Search/Search';


export default function UserPage({userGroups}) {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
        <UserNavbar/> 
        <Search userGroups={userGroups} />
    </div>
        
  )
}
