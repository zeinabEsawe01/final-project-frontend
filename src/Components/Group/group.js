import React from 'react'
import { FaUsers } from 'react-icons/fa';
import GroupForm from './group_form';
import { Link } from 'react-router-dom';
import "./group.css"


export default function Group({userGroup}) {

  return (
    <div>
      <div className="catalog-item">
        <FaUsers size={32}/>
        <div className="catalog-item-info">
        <Link to={`/groupDetails/${userGroup._id}`}> <h2>{userGroup.name}</h2></Link>  
        </div>
      </div>
    </div>
  )
}
