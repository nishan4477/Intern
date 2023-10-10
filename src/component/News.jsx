import React from 'react'
import Heading from './Heading'
import { Col, Container, Row } from 'react-bootstrap'
import Cards2 from '../UI/Cards2'
import news1 from "../assets/Images/News/news1.png"
import news2 from "../assets/Images/News/news2.png"
import news3 from "../assets/Images/News/news3.png"
import news4 from "../assets/Images/News/news4.png"
import news5 from "../assets/Images/News/news5.png"
import news6 from "../assets/Images/News/news6.png"


const News = () => {
  return (
    <div className="news">
        <Container>
        <Heading title="News" children="We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance." />
         <Row className='gy-4'>
          <Col lg="4">
            <Cards2 image={news1} title="Statement from the Catalogue Coalition..." desc='In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds...' />
          </Col>
          <Col lg="4">
            <Cards2 image={news2} title="Statement from the Catalogue Coalition...  " desc="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..." / >
          </Col>
          <Col lg="4">
          <Cards2 image={news3} title="Statement from the Catalogue Coalition...  " desc="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..." / >
          </Col>
          <Col lg="4">
          <Cards2 image={news4} title="Statement from the Catalogue Coalition... " desc="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..." / >
          </Col>
          <Col lg="4">
          <Cards2 image={news5} title="Statement from the Catalogue Coalition..." desc="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..." / >
          </Col>
          <Col lg="4">
          <Cards2 image={news6} title="Statement from the Catalogue Coalition..." desc="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds..." / >
          </Col>


         </Row>

         <button className='downbtn'>
          <h4>View all news</h4>
         </button>

        </Container>
    </div>
  )
}

export default News