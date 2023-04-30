import React from 'react';
import Place from '../Place/Place';
import AddingPlaceToGroup from '../AddingPlaceToGroup/AddingPlaceToGroup';
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
        <div style={divStyle} className='places-container'>
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