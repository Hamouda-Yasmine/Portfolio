
import {  Container, Nav, Navbar } from 'react-bootstrap'
import { Button} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'
import {  faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
  const location = useLocation();

  const CVPdf = '/Yasmine-Hamouda-CV.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'Yasmine-Hamouda-CV.pdf';
    window.open(CVPdf, 'Hamouda-yasmine');
    link.href = CVPdf;

    link.click();
  };

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <p className="m-1"><strong>Hamouda yasmine</strong></p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto d-flex align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === '/' ? 'active navbar-link m-1' : 'navbar-link m-1'}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/education"
              className={location.pathname === '/education' ? 'active navbar-link m-1' : 'navbar-link m-1'}
            >
              Education
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              className={location.pathname === '/skills' ? 'active navbar-link m-1' : 'navbar-link m-1'}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/mywork"
              className={location.pathname === '/mywork' ? 'active navbar-link m-1' : 'navbar-link m-1'}
            disabled
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contacts"
              className={location.pathname === '/contacts' ? 'active navbar-link m-1' : 'navbar-link m-1'}
            >
              Contact me
            </Nav.Link>
          </Nav>
          <Button className="cv-button" onClick={handleDownload}>
            Download my CV<FontAwesomeIcon icon={faDownload} />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
  
}

export default NavBar