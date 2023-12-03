import React from 'react'
import "../../routes/Home.css"
import image6 from "../../assets/section5img.png"

const Section5 = () => {
  return (
    <div class="section5">
    <button className='btn' style={{ marginBottom:"20px"}}>⚒️ Integrations</button>
    <center><h6 className='maintext2' style={{color:"white", marginBottom:"20px"}}>Enable <span id="orange">integration</span> with other</h6></center>
    <center><h6 className='maintext2' style={{color:"white", marginBottom:"20px"}}>popular tools and platforms</h6></center>
    <center><h6 className='subtext' >Seamlessly connect and amplify your workflow</h6></center>
    <center><h6 className='subtext' > by enabling integration with a diverse array of</h6></center>
    <center><h6 className='subtext' >widely-used tools and platforms. </h6></center>
    <img src={image6} style={{height:"320px", width:"600px"}} id="second"/>
    </div>
  )
}

export default Section5