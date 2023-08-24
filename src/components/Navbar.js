import React, { useEffect, useState } from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import { Button} from '@mui/material'
import { Link } from 'react-router-dom'
import './NavBar.css'
import {  faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  const [activeRoute,setActiveRoute]=useState();

  useEffect(()=>{
    const path=window.location.pathname;
    setActiveRoute(path.slice(1,path.length));
  },[]);

return (
    <Navbar expand="md">
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
       <Button  color="secondary"> Download my CV<FontAwesomeIcon icon={faDownload} /></Button>
      </Navbar.Collapse>
   </Container>
   </Navbar>
   

  )
 
  
  
}

export default NavBar