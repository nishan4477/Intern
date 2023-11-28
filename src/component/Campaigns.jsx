import React from 'react'
import Heading from './Heading'
import Cards from '../UI/Cards'
import img1 from "../assets/Images/campign/campign1.png"
import img2 from "../assets/Images/campign/campign2.png"
import img3 from "../assets/Images/campign/campign3.png"
import { Col, Container, Row } from 'react-bootstrap'



const Campaigns = () => {
  return (
    <Container className='campaigns'>
        <Heading title="Campaigns" children="We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance."  />

        <Row>
            <Col lg="4" md="6" sm="12">
            <Cards image={img1} title="Open Data Directive" desc="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "  />
            </Col>
            <Col lg="4" md="6" sm="12">
            <Cards image={img2} title="Beneficial Ownership" desc="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "      />


            </Col>

            <Col lg="4" md="6" sm="12">
            <Cards image={img3} title="EU Recovery Transparency" desc="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "      />

                
</Col>

           
        </Row>



    </Container>
  )
}

export default Campaigns