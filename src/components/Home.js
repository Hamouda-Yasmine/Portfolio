import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from "../assets/img/header-img.svg";

function Home() {
  return (
    <section className='banner'>
      <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <span className='tagline'>Welcome in to my Portfolio.</span>


        </Col>
        <Col xs={12} md={6} xl={5}>
        <img src={headerImg} alt="Header Img"/>
        </Col>
      </Row>
      </Container>
    </section>
  )
}

export default Home