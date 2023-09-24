import React from 'react'
import './Footer.css'
import { Container, Row, Col} from 'react-bootstrap';
import { AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <Container >
      <Row>
       <Col ></Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Yasmine Hamouda</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                 href="https://github.com/Hamouda-Yasmine"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:hamouda.yasmine9@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yasmine-hamouda-70070924b"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
           
          </ul>
        </Col>
      </Row>
    </Container>
    </footer>

  )
}

export default Footer