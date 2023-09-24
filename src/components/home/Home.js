
import { Col, Container, Row } from 'react-bootstrap'
import homeimg from "../../assets/img/office final.png";
import { AiFillGithub} from "react-icons/ai";
import {MdEmail}from "react-icons/md"
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import Tilt from "react-parallax-tilt";
import './Home.css'

function Home() {
 

  const textGroups = [
    {
      text: '( Backend )',
      deleteCount: 11,
    },
    {
      text: '( Frontend )',
      deleteCount: 12,
    },
  ];

  
  return (
<section className='home'>
  <Container  style={{display:"flex"}}>
    <Row xs={1} md={2}>
      <Col style={{paddingTop:'50px'}}>
        
        <h1>Hello there! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
        <h1>I'm <strong>Yasmine Hamouda </strong></h1>
        
        <Typewriter   
      onInit={(typewriter) => {
      typewriter.changeDelay(50)
      .typeString('A passionate and creative Software Engineer and Web Developer ')
      
      
      textGroups.forEach((group) => {
        typewriter.changeDelay(50)
          .typeString(group.text)
          .pauseFor(300)
          .deleteChars(group.deleteCount);
      });

      typewriter
     
      .typeString(' . </br> <strong> </strong>  Welcome into my digital sanctuary, where I showcase my journey through the world of ').changeDelay(30)
      .typeString('<span style="color: ##4a4545; font-family: Courier New, monospace;"> Coding <span  role="img" >🤖</span> </span>')
      .typeString("and")
      .typeString('<span  style="color: #911D91"> Design! <span  role="img" >🎨</span></span>.')
      
      .start();
      ;}} />
      </Col>

      <Col className='home-img'  style={{paddingTop:'10px'}} >
        <Tilt>
          <img src={homeimg} alt="home Img" className="img-fluid"  />
        </Tilt>
        
      </Col>
  
      <Col className="home-social ">
            <h2 style={{paddingBottom:"10px"}}> Feel free to <strong>Connect </strong>with me</h2>
          
            <ul className='list-icons'  >
              <li className="social-icons">
                <a
                  href="https://github.com/Hamouda-Yasmine"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hamouda.yasmine9@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yasmine-hamouda-70070924b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
            </ul>
        </Col>
      
    </Row>

    
    

  </Container>
</section>
  )
}

export default Home