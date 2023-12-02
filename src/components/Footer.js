import React from 'react'
import Logo from '../assets/icon.png';
import "../components/Footer.css"

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-img'>
            <img src={Logo}/>
            <h2>Manage wise</h2>
        </div>
        <div className='footer-list'>
            <p>Features</p>
            <p>FAQ</p>
            <p>Pricing</p>
            <p>Testimonials</p>
        </div>
    </div>
    <hr></hr>
    </>
  )
}

export default Footer