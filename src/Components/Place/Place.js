import React, { useState } from "react";
import CustomRating from "../Rating/rating";
import "./place.css";

const Place = ({ place }) => {
  console.log(place);
  return (
    <div>
      <span>{place.title}</span>
      <p className="place-description">{place.description}</p>
      <br />
      <img className="place-img" src={place.img} alt="" />
      <br/>
      <CustomRating/>
    </div>
  );
};

export default Place;
