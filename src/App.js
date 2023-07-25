import { Navbar,Container, Nav, Row, Col} from 'react-bootstrap';
import { faAddressCard, faDownload, faGears, faHouse, faLaptopCode, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Mywork from './components/Mywork';
import Contacts from './components/Contacts';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Link,Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './assets/img/logo.svg';
import navIcon1 from './assets/img/nav-icon1.svg';

function App() {

  const [activeRoute,setActiveRoute]=useState();

  useEffect(()=>{
    const path=window.location.pathname;
    setActiveRoute(path.slice(1,path.length));
  },[]);
  return (
 
    /*
      -BrowserRouter is used to wrap all the app to enable routing.
      -Router is used within it to define the different routes and their corresponding components.
    */ 
 
      
       <BrowserRouter >
      <Navbar expand="md">
            <Container>
        <Navbar.Brand>
        <p className='m-1'>Hamouda yasmine</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={()=>setActiveRoute("")} className={activeRoute===""?'active navbar-link  m-1':'navbar-link m-1'}> <FontAwesomeIcon icon={faHouse} /> Home</Nav.Link>
            <Nav.Link as={Link} to="/education"onClick={()=>setActiveRoute("education")} className={activeRoute==="education"?'active navbar-link m-1 ':'navbar-link m-1'}><FontAwesomeIcon icon={faUserGraduate} /> Education</Nav.Link>
            <Nav.Link as={Link} to="/skills"onClick={()=>setActiveRoute("skills")} className={activeRoute==="skills"?'active navbar-link  m-1':'navbar-link m-1'}><FontAwesomeIcon icon={faGears} /> Skills</Nav.Link>
            <Nav.Link as={Link} to="/mywork"onClick={()=>setActiveRoute("mywork")} className={activeRoute==="mywork"?'active navbar-link  m-1':'navbar-link m-1'}><FontAwesomeIcon icon={faLaptopCode} /> Projects</Nav.Link>
            <Nav.Link as={Link} to="/contacts"onClick={()=>setActiveRoute("contacts")} className={activeRoute==="contacts"?'active navbar-link m-1 ':'navbar-link m-1'}><FontAwesomeIcon icon={faAddressCard} /> Contact</Nav.Link>
            <Nav.Link className='btn btn-info m-1'>download my CV <FontAwesomeIcon icon={faDownload} /></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
        
      
 
         <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/mywork' element={<Mywork/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
         </Routes>

         <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/"><img src={navIcon1} alt="Icon" /></a>
          
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>

      </BrowserRouter>
     
    
  );
}

export default App;
