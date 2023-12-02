import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/child1.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro image"/>
    </div>
    <div className="content">
        <p>Service before self</p>
     <h1>Sambhav Foundation</h1>
     <div>
        <Link to="/project" className='btn'>Donate</Link>
        <Link to="/contact" className='btn-light'>Vounteer</Link>
     </div>
    </div>
    </div>
  )
}

export default HeroImg