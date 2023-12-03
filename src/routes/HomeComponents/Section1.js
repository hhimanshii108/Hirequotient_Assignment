import React from 'react'
import "../../routes/Home.css"
import Reveal from 'react-reveal/Reveal';
const Section1 = () => {
  return (
    <div className="section1">
      <Reveal effect="fadeInUp">
          <button className="btn">
          👋Welcome to manage wise
          </button>
         <center><h1 className="maintext">Empower your business with </h1></center> 
         <center><h3 className="maintext"> <span className="maintext" id="orange">Strategic</span> insights</h3></center> 
        <center><p className="subtext"  id="second">Powerful management platform designed to streamline your business</p></center>  
          <center><p className="subtext"> operations, boost productivity, and drive success</p></center>
          <div className='two-buttons' id="second">
          <button className="main-btn1">Get Started</button>
          <button className="main-btn2">Watch Demo ▶️</button>
          </div>
          </Reveal>
        </div>

  )
}

export default Section1