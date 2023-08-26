
import { Col, Container, Row } from 'react-bootstrap'
import homeimg from "../assets/img/about.png";
import { AiFillGithub, AiOutlineTwitter} from "react-icons/ai";
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
  <Container >
    <Row className="aligh-items-center">
      <Col xs={10} md={6} xl={6.5}>
        <span className='tagline'>Welcome into my Portfolio.</span>
        <span className="wave" role="img" aria-labelledby="wave">👋</span>
        <Typewriter   
      onInit={(typewriter) => {
      typewriter.changeDelay(30)
      .typeString('Hello there! <span className="wave" role="img" aria-labelledby="wave">👋</span> </br> ')
      
      .typeString('I am <strong>Yasmine Hamouda </strong> a passionate and creative Software Engineer and Web Developer ')
      
      
      textGroups.forEach((group) => {
        typewriter.changeDelay(50)
          .typeString(group.text)
          .pauseFor(300)
          .deleteChars(group.deleteCount);
      });

      typewriter
     
      .typeString("Welcome into my digital sanctuary, where I showcase my journey through the world of ")
      .typeString('<span style="color: ##4a4545; font-family: Courier New, monospace;"> _Coding <span  role="img" >🤖</span> </span>')
      .typeString(" and ")
      .typeString('<span  style="color: #911D91"> Design! <span  role="img" >🎨</span></span>.')
      
      .start();
      ;}} />
      </Col>

      <Col xs={10} md={5} xl={4}>
        <Tilt>
          <img src={homeimg} alt="Header Img"/>
        </Tilt>
        
      </Col>
    </Row>


    <Row>
      <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sukrutrahane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/sukrutrahane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sukrutrahane/"
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