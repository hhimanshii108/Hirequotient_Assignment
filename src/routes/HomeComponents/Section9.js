import React from 'react'
import "../../routes/Home.css";
import people from "../../assets/people.png"
const Section9 = () => {
  return (
    <div className='section9'>
        <button className="btn">👋Dont miss out</button>
        <center><h6 className='maintext2' id="second">Unleash your <span id="orange">Potential</span> with us</h6></center>
        <center><h6 className='subtext' id="second">Join our community of ambitious individuals and organizations </h6></center>
        <center><h6 className='subtext'  >eager to make a difference.</h6></center>
        <button className="main-btn1" id="second2">Try out now</button>
        <img src={people}/>
    </div>
  )
}

export default Section9