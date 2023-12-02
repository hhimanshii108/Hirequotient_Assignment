import React from 'react'
import "../components/card2.css"
const Card2 = ({ imageUrl, heading, text }) => {
    return (
      <div className="card">
        <img src={imageUrl} alt="Card" className="card-image" />
        <div className="card-content">
          <h3 className="card-heading">{heading}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  };
  
  export default Card2;

