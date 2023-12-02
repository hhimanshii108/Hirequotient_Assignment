import React from 'react';
import "../../routes/Home.css";
import tick from "../../assets/tick.png"

const Section7 = () => {
  return (
    <>
      <div className="section7" id="section7">
        <button className="btn">PRICING</button>
        <h6 className='maintext2' id="second">Select your ideal Pricing plan</h6>
        <h6 className='subtext' id="second">At Manage Wise, we believe in providing you with pricing </h6>
        <h6 className='subtext' id="second">plans that adapt to your unique needs.</h6>
      </div>
      <div className='section7cards'>
      <div id="cardItems" >
        <button className='cardButton' id='second'>FREE</button>
        <h2 className="cardTitle" id='second'>$0/month</h2>
        <ul id='second'>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Access to all basic features</li>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Reporting and analytics</li>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Reporting and analytics</li>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Up to 5 individual users</li>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Chat and email support</li>
        </ul>
        <button className='cardButton' id="second">Get Started</button>
      </div>
      <div id="cardItems2">
        <button className='cardButton' id='second'>STANDARD</button>
        <h2 className="cardTitle" id='second'style={{color:"rgb(255,255,255)"}} >$25/month</h2>
        <ul id='second'>
            <li id="second" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Access to all basic features</li>
            <li id="second" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Reporting and analytics</li>
            <li id="second" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Up to 5 individual users</li>
            <li id="second" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Chat and email support</li>
            <li id="second" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>3+ integrations</li>
            <li id="second" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Account performance reporting</li>
        </ul>
        <button className='cardButton'>Get Started</button>
      </div>
      <div id="cardItems">
        <button className='cardButton' id='second'>BUSINESS</button>
        <h2 className="cardTitle" id='second'>$42/month</h2>
        <ul id='second'>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Access to all basic features</li>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Reporting and analytics</li>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Up to 5 individual users</li>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Chat and email support</li>
            <li id="second"><img src={tick} style={{height:"15px" ,width:"15px"}}/>3+ integrations</li>
        </ul>
        <button className='cardButton'>Get Started</button>
      </div>
      </div>
    </>
  )
}

export default Section7;
