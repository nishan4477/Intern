import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
const Cards2 = ({image, title, desc}) => {
  return (
    <div className='cards2 shadow  '>
        
            <img src={image} alt="" />
  
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href=''> Learn more <AiOutlineArrowRight size={20} color='#478AB5' /> </a>


    </div>
  )
}

export default Cards2