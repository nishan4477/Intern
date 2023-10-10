import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

const Card3 = ({icons, iconsTitle, title, desc}) => {
  return (
    <div className='cards3'>
        <div className="icons__top">
            <h4>{icons}</h4>
            <h5>{iconsTitle}</h5>
        </div>

        <h2>{title}</h2>
        <p>{desc}</p>
        <a href=''> Learn more <AiOutlineArrowRight size={20} color='#478AB5' /> </a>


    </div>
  )
}

export default Card3