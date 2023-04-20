import React, { useState } from 'react'
import UserNavbar from '../Navbar/userNavbar'
import "./sidebar.css";
import Search from '../Search';
import Places from '../Places/Places';

export default function UserPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [places, setPlaces] = useState([]);
    const [userGroups, setUserGroups] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const updateplaces = (filteredPlaces) => {
    setPlaces(filteredPlaces);
  };

  return (
    <div>
        <UserNavbar/> 
        <Search places={places} updateplaces={updateplaces} />
        <Places places={places} userGroups={userGroups} />
    </div>
        
  )
}
