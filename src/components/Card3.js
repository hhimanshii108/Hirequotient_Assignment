import React from 'react'
import "../components/card2.css"
const Card3 = ({imageUrl, heading, para}) => {
  return (
    <div className="card3">
    <img src={imageUrl} alt="Card" className="card-image3" />
    <div className="card-content3">
      <h3 className="card-heading3">{heading}</h3>
      <p className="card-para3">{para}</p>
    </div>
  </div>
  )
}

export default Card3