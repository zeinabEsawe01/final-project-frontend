import React from 'react';
import Place from '../Place/Place';


const Places = ({places, userGroups}) => {
    return(
        <div className='places-container'>
                { places.map((p,index) => 
                      <Place  key={index}  place={p} userGroups={userGroups} />
                    ) 
                }
        </div>
    )
}

export default Places