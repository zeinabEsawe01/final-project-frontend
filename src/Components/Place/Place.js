import React from "react";
import "./place.css";

const Place = ({ place }) => {

  return (
    <div>
      <span>{place.title}</span>
      <p className="place-description">{place.description}</p>
      <br />
      <img className="place-img" src={place.img} alt="" />
      <br />
      <span className="place-location">{place.location}</span>
      <br />
      <div className='place-ratings'>
            { place.placeRatings.map((pr) => 
                  <div className='place-rating'>
                    <span className="place-ratings-type">{pr.type}</span>
                    <span className="place-ratings-value">{pr.ratingValue}</span>
                  </div>
                ) 
            }
      </div>
    </div>
  );
};

export default Place;
