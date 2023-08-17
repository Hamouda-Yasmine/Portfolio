import React, { useState } from 'react'
import { Button, Col, Container,  Form,  Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contacts() {
  const formInputs={
    name:'',
    email:'',
    message:'',
    subject:''
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
          message:'',
          subject:''
         })
       })
       .catch((error) => {
        setLoading(false);
         console.error('Error sending email:', error);
         setInputs({
          name:'',
          email:'',
          message:'',
          subject:''
         })
       });

};

  return (
    <section className='contact-form' id="connect">
      <Container>
        <Row className='center-align'>
          <Col sm={5} >
          <img alt="Contact Us"/>
          </Col>

          <Col sm={7}>
            <h1>Get In Touch</h1>
            
         <Form onSubmit={sendMessage}>
      <Row >
        <Form.Group as={Col} >
         
          <Form.Control  size='lg'type="text" name='name' value={inputs.name} placeholder='Your name' onChange={formUpdate} className='input' required/>
        </Form.Group>

        <Form.Group as={Col} >
          
          <Form.Control size='lg' type="email" name='email' value={inputs.email} placeholder='Your Email' onChange={formUpdate} className='input' required/>
        </Form.Group>
        
      </Row>

      <Form.Group className="mb-3">
        <Form.Control size='lg'type="text" name='subject' value={inputs.subject} placeholder='The subject' onChange={formUpdate} className='input' required/>
      </Form.Group>

      <Form.Group className="mb-3" >
       
        <Form.Control size='lg' as="textarea" rows={7} name='message' value={inputs.message} placeholder='Message'onChange={formUpdate} required/>
        
      </Form.Group>

     


      <Button variant="primary" type="submit">
      <span>{loading?'is louding...':'Send'}</span>
      </Button>
    </Form>
       
          </Col>
        </Row>
    
      </Container>
     
    </section>
    
    
  )

  
}

export default Contacts