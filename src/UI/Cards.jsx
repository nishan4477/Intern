import React from 'react'

import { Container } from 'react-bootstrap'
import {AiOutlineArrowRight} from "react-icons/ai"
const Cards = ({image,title,desc}) => {
  return (
    <div className="cards">
    <Container>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href=''> Learn more <AiOutlineArrowRight size={20} color='#478AB5' /> </a>
  



    </Container>
    </div>
  )
}

export default Cards