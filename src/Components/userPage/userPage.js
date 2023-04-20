import React, { useState } from 'react'
import UserNavbar from '../Navbar/userNavbar'
import "./sidebar.css";
import Search from '../Search';

export default function UserPage() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <UserNavbar/> 
        <Search />
    </div>
        
  )
}
