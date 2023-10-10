import React from 'react'
import { Container } from 'react-bootstrap'

const Heading = ({title, children}) => {
  return (
    <div className="heading">
      <Container>

      <h2>{title}</h2>
        <p>{children}</p>


      </Container>
     
        
    </div>
  )
}

export default Heading