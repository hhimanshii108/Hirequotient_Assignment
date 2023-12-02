import React from 'react'
import Navbar from '../components/Navbar'
import "./Home.css";
import "../components/card2.css"
import Section1 from "./HomeComponents/Section1.js"
import Section2 from "./HomeComponents/Section2.js"
import Section3 from "./HomeComponents/Section3.js"
import Section4 from './HomeComponents/Section4.js'
import Section5 from './HomeComponents/Section5.js'
import Section6 from './HomeComponents/Section6.js'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
    </div>
  )
}


export default Home