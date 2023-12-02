import React from 'react'
import "../../routes/Home.css"
import image6 from "../../assets/section5img.png"

const Section5 = () => {
  return (
    <div class="section5">
    <button className='btn' style={{ marginBottom:"20px"}}>Integrations</button>
    <h6 className='maintext2' style={{color:"white", marginBottom:"20px"}}>Enable integration with other</h6>
    <h6 className='maintext2' style={{color:"white", marginBottom:"20px"}}>popular tools and platforms</h6>
    <h6 className='subtext' >Seamlessly connect and amplify your workflow</h6>
    <h6 className='subtext' > by enabling integration with a diverse array of</h6>
    <h6 className='subtext' >widely-used tools and platforms. </h6>
    <img src={image6} style={{height:"500px", width:"600px"}}/>
    </div>
  )
}

export default Section5