import React from 'react'
import "../../routes/Home.css"
import star from "../../assets/star.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import Card1 from '../../components/Card1'
import Card2 from '../../components/Card2'

const Section3 = () => {
  return (
    
        <div className="section3" id="section3">
        <button className="btn">🔥Premium Features</button>
       <center> <h6 className="maintext2" id="second">Discover our product's <span className="maintext2" id="orange">Capabilities</span></h6></center>
        <center><p className="subtext" id="second">Don't settle for mediocrity - embrace the future of management</p></center>
        <p className="subtext" >with Manage Wise.</p>
        
        <Card1 imageUrl={star} heading="Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features."/>
    
        <Card2 imageUrl={image2} heading="Smart Task Management" text="Say goodbye to chaos with our smart task management system"/>
        <Card2 imageUrl={image3} heading="Flexible Scheduling" text="Stay productive with our flexible scheduling system"/>
        <Card2 imageUrl={image4} heading="Easy Communication" text="Collaborate seamlessly with your team in real-time"/>
        <Card2 imageUrl={image5} heading="Analytics" text="Gain valuable insights with our advanced analytics feature"/>
        
        </div>
    
  )
}

export default Section3