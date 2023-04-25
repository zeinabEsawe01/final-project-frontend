import React from 'react';
import { useParams } from 'react-router-dom';
import "./groupDetails.css"
import axios from 'axios';

const GroupDetails = async ({userGroups}) => {
    let {groupId} = useParams()
    let groupIdNumber = parseInt(groupId)
    let group = userGroups.filter(ug => ug._id === groupIdNumber)
    const places = await axios.get(`/http://localhost:4800/group/groupPlaces/${group._id}`);
    return (
        <div>
             
                        <div>
                            <span>{group.name}</span>
                            <span className='group-kind'>{group.kind}</span><br />
                        </div>    
                        <div>    
                        {group.members.map(m => <span>{m}</span>)} 
                            
                        </div>
                        <div className='places-container'>    
                        {places.map(p =>
                        <div>
                            <span>{p.title}</span>
                            <span className='place-description'>{p.description}</span><br />
                            <img className='place-img' src={p.img} alt="" /><br />
                        </div> 
                        )} 
                            
                        </div>
                        

        </div>
    )
}

export default GroupDetails
