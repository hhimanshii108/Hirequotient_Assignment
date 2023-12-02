import React from 'react'
import "../../routes/Home.css"
import phone from "../../assets/phone.png"
import fire from "../../assets/fire.png"
import notification from "../../assets/notification.png"
import Card3 from '../../components/Card3'
const Section4 = () => {
  return (
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
  )
}

export default Section4