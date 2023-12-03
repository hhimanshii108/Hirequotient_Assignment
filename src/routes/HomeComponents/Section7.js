import React from 'react';
import "../../routes/Home.css";
import tick from "../../assets/tick.png"

const Section7 = () => {
  return (
    <>
      <div className="section7" id="section7">
       <center><button className="btn">💲PRICING</button></center> 
       <center><h6 className='maintext2' id="second">Select your ideal <span id="orange">Pricing</span> plan</h6></center> 
       <center><h6 className='subtext' id="second">At Manage Wise, we believe in providing you with pricing </h6></center> 
       <center><h6 className='subtext'>plans that adapt to your unique needs.</h6></center> 
      </div>
      <div className='section7cards'>
      <div id="cardItems" >
      <div id="card-spacing">
        <button className='cardButton' >FREE</button>
        <h2 className="cardTitle" id='second'>$0/month</h2>
        <ul >
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Access to all basic features</li>
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Reporting and analytics</li>
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Reporting and analytics</li>
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Up to 5 individual users</li>
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Chat and email support</li>
        </ul>
        <div className='cardButtonSpacing'>
          </div>
        </div>
        <button className='cardButton' >Get Started</button>
      </div>
      <div id="cardItems2">
      <div id="card-spacing">
        <button className='cardButton'>STANDARD</button>
        <h2 className="cardTitle" id='second'style={{color:"rgb(255,255,255)"}} >$25/month</h2>
        <ul>
            <li id="second2" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Access to all basic features</li>
            <li id="second2" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Reporting and analytics</li>
            <li id="second2" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Up to 5 individual users</li>
            <li id="second2" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Chat and email support</li>
            <li id="second2" style={{color:"rgb(255,255,255)"}}><img src={tick} style={{height:"15px" ,width:"15px"}}/>Account performance reporting</li>
        </ul>
        <div className='cardButtonSpacing'>
        </div>
        <button className='cardButton'>Get Started</button>
        </div>
      </div>
      <div id="cardItems">
        <div id="card-spacing">
        <button className='cardButton' >BUSINESS</button>
        <h2 className="cardTitle" id='second'>$42/month</h2>
        <ul>
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Access to all basic features</li>
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Reporting and analytics</li>
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Up to 5 individual users</li>
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>Chat and email support</li>
            <li id="second2"><img src={tick} style={{height:"15px" ,width:"15px"}}/>3+ integrations</li>
        </ul>
        <div className='cardButtonSpacing'>
        </div>
        <button className='cardButton'>Get Started</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Section7;
