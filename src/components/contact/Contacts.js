import React, { useState } from 'react'
import { Button, Col, Container,  Form,   Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import './Contact.css'
import contactimg from "../../assets/img/pc final.png";


function Contacts() {
  const formInputs={
    name:'',
    email:'',
    message:'',
    subject:''
}

 const [inputs,setInputs]=useState(formInputs)
 const [loading,setLoading]=useState(false)
 const [showvalidation, setShowValidation] = useState(false);


 const formUpdate=(e) => {
 const {name,value}=e.target;
 setInputs({...inputs,[name]: value})
}


const sendMessage=(e)=>{
  e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setShowValidation(true);
      return;
    }

  setShowValidation(false);
  setLoading(true);
     // Configure  email service credentials
     const serviceID = 'service_qqk7x7d';
     const templateID = 'template_pyeqni9';
     const userID = 'ni2Z2A4U1u0-T18Ug';
     const formObject={
      from_name: inputs.name,
      to_name: 'Hamouda yasmine',
      from_email: inputs.email ,
      to_email:'hamouda.yasmine9@gmail.com',
      subject:inputs.subject,
      message: 'subject :'+inputs.subject+' message: '+inputs.message,

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
    <Row>
      <Col sm={4} >
        <img src={contactimg} alt='Contact Us' className='img-fluid' style={{ marginRight: '30px!important' }} />
      </Col>
      <Col sm={1} className='mb-4'></Col> 
      <Col sm={7} >
        <Row className='mb-3'>
          <Col>
            <h1>Get In Touch</h1>
          </Col>
        </Row>

        <Form noValidate showvalidation={showvalidation} onSubmit={sendMessage}>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Control
                type='text'
                name='name'
                value={inputs.name}
                placeholder='Your name'
                onChange={formUpdate}
                className='input'
                required
                isInvalid={showvalidation && !inputs.name}
                isValid={showvalidation && inputs.name}
              />
              <Form.Control.Feedback type='invalid'>Please provide a valid name.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type='email'
                name='email'
                value={inputs.email}
                placeholder='Your Email'
                onChange={formUpdate}
                className='input'
                required
                isInvalid={showvalidation && (!inputs.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email))}
                isValid={showvalidation && inputs.name}
              />
              <Form.Control.Feedback type='invalid'>Please provide a valid email.</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                name='subject'
                value={inputs.subject}
                placeholder='The subject'
                onChange={formUpdate}
                className='input'
                required
                isInvalid={showvalidation && !inputs.subject}
                isValid={showvalidation && inputs.name}
              />
              <Form.Control.Feedback type='invalid'>Please provide a valid subject.</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3'>
              <Form.Control
                as='textarea'
                rows={7}
                name='message'
                value={inputs.message}
                placeholder='Message'
                onChange={formUpdate}
                required
                isInvalid={showvalidation && !inputs.message}
                isValid={showvalidation && inputs.name}
              />
              <Form.Control.Feedback type='invalid'>Please provide a valid message.</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <div className='text-end mt-1'>
            <Button className='purple-button' type='submit'>
              <span>{loading ? 'Loading...' : 'Send the message'}</span>
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
</section>

    
  )

  
}

export default Contacts