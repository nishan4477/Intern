import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from './Heading'
import Card3 from '../UI/Card3'
import {AiOutlineTool, AiOutlineCheck} from "react-icons/ai"
import {CgFileDocument} from "react-icons/cg"

const LatestResources = () => {
  return (
<section className='latest'>
    <Container>
        <Heading title="Latest Resources" children='The latest resources includes Transparency Toolkit, Evidence, Best Practices' />
        <Row>
          <Col lg='4'>
            <Card3 icons={<AiOutlineTool size={30} color="#A276FF"/>} iconsTitle="Tool" title="Defence Elvis" desc="It allows creating networks of public spending on goods services used in defense in 28 EU countries..." />

          </Col>
          <Col lg='4'>
          <Card3 icons={<CgFileDocument size={30} color="#7291FF"/>} iconsTitle="Evidence" title="Open Procurement" desc="It allows creating networks of public spending on goods services used in defense in 28 EU countries..." />
            </Col>
            <Col lg='4'>
            <Card3 icons={<AiOutlineCheck size={30} color="orange"/>} iconsTitle="Best Practices" title="Transparent Spending" desc="It allows creating networks of public spending on goods services used in defense in 28 EU countries..." />
            </Col>


        </Row>
        <button className='downbtn'><h4>View all resources</h4></button>

    </Container>

</section>
  )
}

export default LatestResources