import React from 'react';
import Place from '../Place/Place';
import './places.css'


const divStyle={
    overflowY: 'scroll',
    width:'700px',
    float: 'left',
    height:'1000px',
    position:'relative'
};

const Places = ({places, userGroups}) => {
    return(
        <div style={divStyle} className='placesContainer'>
                { places.map((p,index) => 
                        <Place  key={index}  place={p} userGroups={userGroups} />
                    ) 
                }
        </div>
    )
}

export default Places