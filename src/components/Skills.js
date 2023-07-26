import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import  './Skills.css';



function Skills() {
 
  
  return (
    <section className='skill'>
      <Container>
        <Row>
          <Col>
          <div className='skill-bx'>
            <h2>
             Back-end
            </h2>
            
            <div className="progress-bar">
         
          <div className="progress" style={{ width: `${60}%` }}>
            <span className="percentage">60%</span>
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${80}%` }}>
            <span className="percentage">80%</span>
          </div>
        </div>
           
           
          </div>
          
      
          </Col>
          <Col>
          <div className='skill-bx'>
            <h2>
              Front-end
            </h2>
            <p>

            </p>
          
           
          </div>
          </Col>
          <Col>
          <div className='skill-bx'>
            <h2>
              Qualities
            </h2>
            <p>blabla</p>
          
           
          </div>
          </Col>
        </Row>
    
         
      </Container>
     
    </section>
   
  )
}

export default Skills