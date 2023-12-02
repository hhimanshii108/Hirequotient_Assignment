import "./NavbarStyles.css";
import React from 'react'
import {Link} from "react-router-dom";
import Logo from '../assets/icon.png';
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {
    const [click,setClick]= useState(false);
    const handleClick = () =>setClick(!click);
  return (
    <div className="header">
        <img src={Logo} style={{height:"45px", width:"45px"}}/>
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <ul>
                <Link to="/">Features</Link>
            </ul>
            <ul>
                <Link to="/faq">FAQ</Link>
            </ul>
            <ul>
                <Link to="/pricing">Pricing</Link>
            </ul>
            <ul>
                <Link to="/testimonial">Testimonial</Link>
            </ul>
            <ul id="template">
                <Link id="template" to="/buy"><button class="btn">Buy Template</button></Link>
            </ul>
             
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {
                click? (<FaTimes size={20} style={{color:"black"}}/>):( <FaBars size={20} style={{color:"black"}}/>)
            }
            </div>
           
            
    </div>
  )
}

export default Navbar