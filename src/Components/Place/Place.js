import React, { useState } from "react";
import "./place.css";

const Place = ({ place }) => {
  return (
    <div>
      <span>{place.title}</span>
      <p className="place-description">{place.description}</p>
      <br />
      <img className="place-img" src={place.photos} alt="" />
      <br/>
    </div>
  );
};

export default Place;
