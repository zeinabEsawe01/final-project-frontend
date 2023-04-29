import React, { useState } from 'react'
import UserNavbar from '../Navbar/userNavbar'
import "./sidebar.css";
import Map from '../MapAndPlaces/map'

export default function UserPage({user, userGroups, updateUserState, updateCoordinates,coordinates}) {
  
  const [isOpen, setIsOpen] = useState(false);
    
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <UserNavbar user={user} userGroups={userGroups} updateUserState={updateUserState} updateCoordinates ={updateCoordinates}/> 
        <Map coordinates ={coordinates}/>
    </div>
        
  )
}
