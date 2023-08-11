import React, { useState } from 'react'
import { Col, Container,  Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contacts() {
  const formInputs={
    name:'',
    email:'',
    message:'',
}
 const [inputs,setInputs]=useState(formInputs)
 
 const [loading,setLoading]=useState(false)
 const formUpdate=(e) => {
 const {name,value}=e.target;
 setInputs({...inputs,[name]: value})
}
const sendMessage=(e)=>{
  e.preventDefault();
  setLoading(true);
     // Configure your email service credentials
     const serviceID = 'service_qqk7x7d';
     const templateID = 'template_pyeqni9';
     const userID = 'ni2Z2A4U1u0-T18Ug';
     const formObject={
      from_name: inputs.name,
      to_name: 'Hamouda yasmine',
      from_email: inputs.email ,
      to_email:'hamouda.yasmine9@gmail.com',
      message: inputs.message,
      reply_to: inputs.email,
     }
      
     emailjs.send(serviceID, templateID, formObject, userID)
       .then((response) => {
        setLoading(false);
         console.log('Email sent successfully!', response);
         setInputs({
          name:'',
          email:'',
          message:''
         })
       })
       .catch((error) => {
        setLoading(false);
         console.error('Error sending email:', error);
         setInputs({
          name:'',
          email:'',
          message:''
         })
       });

};

  return (
    <section className='contact-form' id="connect">
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
                  <input type="email" name='email' value={inputs.email} placeholder='Your Email' onChange={formUpdate}></input>
                  
                </Col>
               
                <Col className='px-1'>
                  <textarea rows="6" name='message' value={inputs.message} placeholder='Message'onChange={formUpdate}></textarea>
                  <button type="submit"><span>{loading?'is louding...':'Send'}</span></button>
                </Col>


            </form>
       
          </Col>
        </Row>
    
      </Container>
     
    </section>
    
  )
}

export default Contacts