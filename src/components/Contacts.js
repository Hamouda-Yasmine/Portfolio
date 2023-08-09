import React, { useState } from 'react'
import { Col, Container,  Row } from 'react-bootstrap'
import emailjs from 'emailjs-com';

function Contacts() {
  const formInputs={
    name:'',
    email:'',
    message:''
}
 const [inputs,setInputs]=useState(formInputs);
 
 const [louding,setLounding]=useState(false);
 const formUpdate=(e) => {
 const [name,value]=e.target;
            setInputs({...inputs,
                       [name]:value})
}
const sendMessage=(e)=>{
  e.preventDefault();
  setLounding(true);
     // Configure your email service credentials
     const serviceID = 'YOUR_SERVICE_ID';
     const templateID = 'YOUR_TEMPLATE_ID';
     const userID = 'YOUR_USER_ID';
 
     emailjs.sendForm(serviceID, templateID, inputs, userID)
       .then((response) => {
        setLounding(false);
         console.log('Email sent successfully!', response);
       })
       .catch((error) => {
        setLounding(false);
         console.error('Error sending email:', error);
       });

};

  return (
    <section className='contact' id="connect">
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
          <img alt="Contact Us"/>
          </Col>

          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={sendMessage}>
            <Col sm={6} className='px-1'>
                  <input type="text" name='name' value={inputs.name} placeholder='Your name' onChange={formUpdate}></input>
                </Col>
              
                <Col sm={6} className='px-1'>
                  <input type="email" name="email" value={inputs.email} placeholder='Your Email' onChange={formUpdate}></input>
                  
                </Col>
               
                <Col className='px-1'>
                  <textarea rows="6" name='message' value={inputs.message} placeholder='Message'onChange={formUpdate}></textarea>
                  <button type="submit"><span>{louding?'is louding...':'Send'}</span></button>
                </Col>


            </form>
       
          </Col>
        </Row>
    
      </Container>
     
    </section>
    
  )
}

export default Contacts