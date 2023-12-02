import React from 'react'
import "../components/card2.css"
const Card1 = ({imageUrl, heading}) => {
  return (
    <div className="card1">
    <img src={imageUrl} alt="Card" className="card-image2" />
    <div className="card-content2">
      <h3 className="card-heading2">{heading}</h3>
    </div>
  </div>
  )
}

export default Card1