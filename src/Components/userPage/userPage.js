import React from 'react'
import UserNavbar from '../Navbar/userNavbar'
import SearchComponent from '../Search/Search'
import Map from '../MapAndPlaces/map'

export default function UserPage({user, userGroups, updateUserState, updateCoordinates,coordinates ,updateGroups}) {
  
  return (
    <div>
        <UserNavbar user={user} userGroups={userGroups} updateUserState={updateUserState} updateCoordinates ={updateCoordinates} updateGroups ={updateGroups}/> 
        <Map coordinates ={coordinates}/>
    </div>
  )
}
