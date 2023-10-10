import React from 'react'
import "./hero.scss"
import { Container } from 'react-bootstrap'
import Navigator from './Navigator'
import {AiOutlineArrowRight} from "react-icons/ai"


const Hero = () => {
  return (
   <section className='hero'>
    <Container>
   
   <Navigator/>

  

   <div className='hero__content'>
    <h2>Beautiful analytics to grow smarter</h2>
    <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>

    <button className='btn'>Why Catalog?  <AiOutlineArrowRight size={20} color='white'  /> </button>

   </div>
     
  

   </Container>
    
   </section>
  )
}

export default Hero