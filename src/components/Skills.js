
import { Col, Container, Row } from 'react-bootstrap';
import Progressbar from './Progressbar';
import CircularProgressBar from './CircularProgressBar';
import  './Skills.css';



function Skills() {
 
  
  return (
    <section className='skill'>
      <Container>
        <Row>
          <Col>
          <div className='skill-bx'>
            <h2>
             Backend
            </h2>
            <Progressbar text="Java" percentage={90} />
            <Progressbar text="J2EE" percentage={90} />
            <Progressbar text="Spring Boot" percentage={80} />
            <Progressbar text="Python" percentage={80} />
            <Progressbar text="Flask" percentage={70} />
          </div>
          </Col>
          
          <Col>
          <div className='skill-bx'>
            <h2>
              Frontend
            </h2>
          <Progressbar text="Html" percentage={80}/>
          <Progressbar text="CSS" percentage={60}/>
          <Progressbar text="JavaScript" percentage={60}/>
          <Progressbar text=" React Js" percentage={80}/>
          </div>
          </Col>

          
          <Col>
          <div className='skill-bx'>
            <h2>
              Qualities
            </h2>
            
            <CircularProgressBar text="Creativity" percentage={90}/>
            <CircularProgressBar text="Diplomacy" percentage={80}/>
            <CircularProgressBar text="Flexibility" percentage={90}/>
           
          </div>
          </Col>
        </Row>
    
         
      </Container>
     
    </section>
   
  )
}

export default Skills