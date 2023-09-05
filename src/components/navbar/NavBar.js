import React, { useEffect, useState } from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import { Button} from '@mui/material'
import { Link } from 'react-router-dom'
import './NavBar.css'
import {  faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
  const [activeRoute,setActiveRoute]=useState();
  const CVPdf='/Yasmine-Hamouda-CV.pdf'

  useEffect(()=>{
    const path=window.location.pathname;
    setActiveRoute(path.slice(1,path.length));
 
  },[]);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'Yasmine-Hamouda-CV.pdf';
    window.open(CVPdf, 'Hamouda-yasmine');
    link.href = CVPdf;

    link.click();
  };
  
  
  
return (
    <Navbar expand="md" >
    <Container>
      <Navbar.Brand>
       <p className='m-1'>Hamouda yasmine</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ms-auto  me-auto d-flex align-items-center">
         <Nav.Link as={Link} to="/" onClick={()=>setActiveRoute("")} className={activeRoute===""?'active navbar-link  m-1':'navbar-link m-1'}> Home</Nav.Link>
         <Nav.Link as={Link} to="/education"onClick={()=>setActiveRoute("education")} className={activeRoute==="education"?'active navbar-link m-1 ':'navbar-link m-1'}> Education</Nav.Link>
         <Nav.Link as={Link} to="/skills"onClick={()=>setActiveRoute("skills")} className={activeRoute==="skills"?'active navbar-link  m-1':'navbar-link m-1'}> Skills</Nav.Link>
         <Nav.Link as={Link} to="/mywork"onClick={()=>setActiveRoute("mywork")} className={activeRoute==="mywork"?'active navbar-link  m-1':'navbar-link m-1'}> Projects</Nav.Link>
         <Nav.Link as={Link} to="/contacts"onClick={()=>setActiveRoute("contacts")} className={activeRoute==="contacts"?'active navbar-link m-1 ':'navbar-link m-1'}> Contact</Nav.Link>
       </Nav>
       <Button className='cv-button'  onClick={handleDownload}> Download my CV<FontAwesomeIcon icon={faDownload} /></Button>
      </Navbar.Collapse>
   </Container>
   </Navbar>
   

  )
 
  
  
}

export default NavBar