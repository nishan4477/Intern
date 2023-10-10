import React from 'react'
import "../page/home/home.scss"
import { Container } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import com1 from "../assets/Images/sliderlogo/company1.png"
import com2 from "../assets/Images/sliderlogo/company2.png"
import com3 from "../assets/Images/sliderlogo/company3.png"
import com4 from "../assets/Images/sliderlogo/company4.png"

const LogoSlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='slider'>
        <Container>
        <Carousel responsive={responsive}
         autoPlay={true}
         autoPlaySpeed={4000}
         infinite={true}
        >
              <div><img  src={com1} alt="" /> </div>
              <div><img src={com2} alt="" /></div>
             <div><img src={com3} alt="" /></div>
              <div><img src={com4} alt="" /></div>
              

         </Carousel>   

        </Container>
    </div>
  )
}

export default LogoSlider