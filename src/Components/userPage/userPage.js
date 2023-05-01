import React, { useState , useEffect } from 'react'
import UserNavbar from '../Navbar/userNavbar'
import SearchComponent from '../Search/Search'
import Map from '../MapAndPlaces/map'

export default function UserPage({user, userGroups, updateUserState, updateCoordinates,coordinates , updateUser, removeUserGroup}) {
    

  return (
    <div>
        <UserNavbar user={user} userGroups={userGroups} updateUserState={updateUserState} updateCoordinates ={updateCoordinates} updateUser={updateUser} removeUserGroup={removeUserGroup}/> 
        <Map coordinates ={coordinates}/>
    </div>
  )
}
