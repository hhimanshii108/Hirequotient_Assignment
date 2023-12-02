import React from 'react'
import "../../routes/Home.css";
import people from "../../assets/people.png"
const Section9 = () => {
  return (
    <div className='section9'>
        <button className="btn">Dont miss out</button>
        <h6 className='maintext2' id="second">Unleash your Potential with us</h6>
        <h6 className='subtext' id="second">Join our community of ambitious individuals and organizations </h6>
        <h6 className='subtext' id="second">eager to make a difference.</h6>
        <button className="btn">Try out now</button>
        <img src={people}/>
    </div>
  )
}

export default Section9