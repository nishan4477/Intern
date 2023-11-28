import React from 'react'
import "../page/home/home.scss"
import { Col, Container, Row } from 'react-bootstrap'
import {AiOutlineArrowRight} from "react-icons/ai"
import who1 from "../assets/Images/Who we are img/1.png"
import who2 from "../assets/Images/Who we are img/2.png"
import who3 from "../assets/Images/Who we are img/3.png"
import who4 from "../assets/Images/Who we are img/4.png"

const Who = () => {
  return (
    <div className='who'>
        <Container>
            <Row>
                <Col lg="4">
                    <h2>Who we are</h2>
                    <p>We are a collaboration of Non Govt.  and professionals working to ensure that government spending is done fairly, openly, efficiently, and creates the best value for money and best outcomes for Europe. We are working at the national and EU levels to advance the principles of openness in spending of funds, procurement, and company ownership within the EU.</p>
                    <a  href=''> See more <AiOutlineArrowRight size={14} color='#478AB5' /> </a>

                </Col>

                <Col lg="8">
                
                    <Row>
                        <Col className='left'  lg="6">
                           <div className='image '>
                           <img className='w-100' src={who1} alt="" />
                           </div> 
                            <h3>Adriana Homolova</h3>

                            <div className='image'>
                           <img className='w-100' src={who3} alt="" />
                           </div> 
                            <h3>Karolis Granickas</h3>
                        </Col>
                        <Col className='right' lg="6">
                        <div className='image'>
                           <img className='w-100' src={who2} alt="" />
                           </div> 
                            <h3>Sandor Lederer</h3>

                            <div className='image'>
                           <img className='w-100' src={who4} alt="" />
                           </div> 
                            <h3>Zara Montgomery</h3>
                        </Col>
                    </Row>


                </Col>
            </Row>


        </Container>
    </div>
  )
}

export default Who