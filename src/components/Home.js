import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from "../assets/img/desktop-workstation (2).png";

function Home() {
  const text='Hello there! I am Yasmine Hamouda, a passionate and creative software developer with a love for crafting elegant solutions. Welcome to my digital sanctuary, where I showcase my journey through the world of coding and design.';
  const speed=100;
  const [visibleText, setVisibleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(interval); // Stop the typing effect when all text is shown
      } else {
        setVisibleText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, speed);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [currentIndex, speed, text]);
  return (
    <section className='home'>
      <Container>
      <Row className="aligh-items-center">
        <Col xs={10} md={6} xl={6.5}>
          <span className='tagline'>Welcome into my Portfolio.</span>
          <h1> <span className='wrap'>{visibleText}</span></h1>


        </Col>
        <Col xs={10} md={5} xl={4}>
        <img src={headerImg} alt="Header Img"/>
        </Col>
      </Row>
      </Container>
    </section>
  )
}

export default Home