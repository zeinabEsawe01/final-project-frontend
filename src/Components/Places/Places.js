import React from 'react';
import Place from '../Place/Place';
import AddingPlaceToGroup from '../AddingPlaceToGroup/AddingPlaceToGroup';


const Places = ({places, userGroups}) => {
    return(
        <div className='places-container'>
                { places.map((p,index) =>
                    <div className="place-container">
                        <Place  key={index}  place={p} />
                        <AddingPlaceToGroup  key={index}  place={p} userGroups={userGroups} />
                    </div> 
                      
                    ) 
                }
        </div>
    )
}

export default Places