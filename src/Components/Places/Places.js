import React from 'react';
import Place from '../Place/Place';


const Places = ({places}) => {
    return(
        <div className='places-container'>
                { places.map((p,index) => 
                      <Place  key={index}  place={p} />
                    ) 
                }
        </div>
    )
}

export default Places