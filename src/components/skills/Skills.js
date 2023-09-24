
import { Col, Container, Row } from 'react-bootstrap';
import Progressbar from './Progressbar';
import CircularProgressBar from './CircularProgressBar';
import  './Skills.css';
import {BiCodeAlt,BiCodeCurly} from  "react-icons/bi";
import {HiOutlineBadgeCheck}from "react-icons/hi"



function Skills() {
 
  
  return (
    <section className='skill'>
      <Container>
        <Row>
          <Col>
          <div className='skill-bx'>
            <h2>
             <BiCodeCurly/> Backend
            </h2>
            <Progressbar text="Java" percentage={90} />
            <Progressbar text="J2EE" percentage={90} />
            <Progressbar text="Spring Boot" percentage={80} />
            <Progressbar text="Python" percentage={80} />
            <Progressbar text="Flask" percentage={70} />
            <Progressbar text="MySQL" percentage={80} />
          </div>
          </Col>
          
          <Col>
          <div className='skill-bx'>
            <h2>
             <BiCodeAlt/> Frontend
            </h2>
          <Progressbar text="Html" percentage={80}/>
          <Progressbar text="CSS" percentage={60}/>
          <Progressbar text="Bootstrap" percentage={50}/>
          <Progressbar text="JavaScript" percentage={60}/>
          <Progressbar text=" React Js" percentage={80}/>
          </div>
          </Col>

          
          <Col>
          <div className='skill-bx'>
            <h2>
             <HiOutlineBadgeCheck/> Qualities
            </h2>
           
            <CircularProgressBar text="Creativity" percentage={90}/>
            <CircularProgressBar text="Diplomacy" percentage={80}/>
            <CircularProgressBar text="Flexibility" percentage={90}/>
            <CircularProgressBar text="Adaptability" percentage={90}/>
            
          
           
          </div>
          </Col>
        </Row>
    
         
      </Container>
     
    </section>
   
  )
}

export default Skills