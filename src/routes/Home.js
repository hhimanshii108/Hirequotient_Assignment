import React from 'react'
import Navbar from '../components/Navbar'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import star from "../assets/star.png"
import "./Home.css";
import Card2 from '../components/Card2.js';
import Card1 from '../components/Card1.js'
import "../components/card2.css"
import Card3 from "../components/Card3.js"
import notification from "../assets/notification.png"
import phone from "../assets/phone.png"
import fire from "../assets/fire.png"
import image6 from "../assets/section5img.png"

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="section1">
          <button className="btn">
            Welcome to manage wise
          </button>
          <h1 className="maintext">Empower your business with </h1>
          <h3 className="maintext" id="second">Strategic insights</h3>
          <p className="subtext">Powerful management platform designed to streamline your business operations, boost productivity, and drive success</p>
          <button className="btn">Get Started</button>
          <button className="btn">Watch Demo</button>
        </div> 
        <div className="section2">
          <img className="image1"src={image1}/>
        </div>
        <div className="section3">
        <button className="btn">Premium Features</button>
        <h6 className="maintext2" id="second">Discover our product's Capabilities</h6>
        <p className="subtext" id="second">Don't settle for mediocrity - embrace the future of management</p>
        <p className="subtext" >with Manage Wise.</p>
        
        <Card1 imageUrl={star} heading="Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features."/>
    
        <Card2 imageUrl={image2} heading="Smart Task Management" text="Say goodbye to chaos with our smart task management system"/>
        <Card2 imageUrl={image3} heading="Flexible Scheduling" text="Stay productive with our flexible scheduling system"/>
        <Card2 imageUrl={image4} heading="Easy Communication" text="Collaborate seamlessly with your team in real-time"/>
        <Card2 imageUrl={image5} heading="Analytics" text="Gain valuable insights with our advanced analytics feature"/>
        
        </div>
        <div className='section4'>
          <button className='btn' style={{ marginBottom:"20px"}}>And More</button>
          <h6 className='maintext2' style={{color:"white", marginBottom:"20px"}}>Explore an array of features that elevate your Productivity to new heights</h6>
          <h6 className='subtext' >Discover the tools that will revolutionize the way you </h6>
          <h6 className='subtext'>manage and optimize your operations</h6>
          <div class="center">
          <Card3 imageUrl={phone} heading="Cross-Platform Compatibility" para="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."/>
          <Card3 imageUrl={notification} heading="Stay Informed with Essential Notifications" para="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."/>
          <Card3 imageUrl={fire} heading="Secure Data Encryption at all times" para="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."/>
          </div>
         
        </div>
        <div class="section5">
        <button className='btn' style={{ marginBottom:"20px"}}>Integrations</button>
        <h6 className='maintext2' style={{color:"white", marginBottom:"20px"}}>Enable integration with other</h6>
        <h6 className='maintext2' style={{color:"white", marginBottom:"20px"}}>popular tools and platforms</h6>
        <h6 className='subtext' >Seamlessly connect and amplify your workflow</h6>
        <h6 className='subtext' > by enabling integration with a diverse array of</h6>
        <h6 className='subtext' >widely-used tools and platforms. </h6>
        <img src={image6} style={{height:"500px", width:"600px"}}/>
        </div>
    </div>
  )
}


export default Home