import React from 'react'
import { FaUsers } from 'react-icons/fa';
import GroupForm from './group_form';


export default function Group({ug}) {
    ug = []
  return (
    <div>
    <div className="catalog-item">
    <FaUsers size={32}/>
    <div className="catalog-item-info">
      <h2>{ug.name}</h2>
    </div>
  </div>
    </div>
  )
}
