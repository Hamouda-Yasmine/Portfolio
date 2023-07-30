import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

function Footer() {
  return (
    <footer className="">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={''} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/"><img src={''} alt="Icon" /></a>
          
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer