import React from 'react'
import "../../routes/Home.css"
import { useState } from 'react'
const Section6 = () => {

    const [selected,setSelected]= useState(null)
    const toggle = (i) => {
        if(selected === i)
        {
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <>
    <div className='section6' id="section6">
        <button className="btn">🙋‍♀️ FAQ</button>
        <h6 className='maintext2'id="second" >Need</h6>
        <h6 className='maintext2'> <span id="orange">Answers?</span></h6>
        <h6 className='subtext'id="second">Check out our most commonly asked questions below to find the information you need.</h6>
    </div>
        <div className='accordation' id="second">
        {data.map((item,i)=>(
         <div className={selected===i ?'showitem':'item'}>
             <div onClick={()=>toggle(i)} className="title">
              <h3>{item.question}</h3>
              <span style={{color:"rgb(130, 71, 255)", fontSize:"20px"} }>{selected===i ?'-':'+'}</span>
             </div>
             <div className={selected===i ?'content show':'content'}>
              <h3>{item.answer}</h3>
             </div>
         </div>
        ))}
        </div>
  </>
  )
 
}

const data=[{
    number:1,
    question: 'What is Manage Wise and what does it offer?',
    answer:'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.'
  },{
    number:2,
    question:'Is Manage Wise suitable for small businesses and larger enterprises alike?',
    answer:'Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.'
  },
  {
    number:3,
    question:'Can I access Manage Wise from different devices and platforms?',
    answer:'Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.'
  },
  {
    number:4,
    question:'What kind of support options do you offer to users?',
    answer:'We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.'
  },
  {
    number:5,
    question:'How secure is the data stored within Manage Wise?',
    answer:'Your data security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure you sensitive information is safe and protected.'
  }]

export default Section6