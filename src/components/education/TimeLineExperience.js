import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {MdEmail}from "react-icons/md"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function TimeLineExperience() {
  const CVPdf='/Yasmine-Hamouda-CV.pdf'
  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'Yasmine-Hamouda-CV.pdf';
    window.open(CVPdf, 'Hamouda-yasmine');
    link.href = CVPdf;

    link.click();
  };
  return (
    <Container>
      <div style={{padding:'10px 60px 50px 50px' }}>
    <h2 style={{padding:'30px 30px 20px 30px',color:'#676666 '}}>
      New to the professional world, I'm eager to kickstart my journey. 
      Although I lack formal experience, my passion and determination drive me to learn and excel. 
      </h2>
      <h2 style={{paddingBottom:'30px',color:'#676666 '}}>Connect with me via the "Contact" button or download my CV below.</h2>
<Link to="mailto:hamouda.yasmine9@gmail.com">
<Button style={{margin:'32px'}}  className=' purple-button'  >
<span> Contact me <MdEmail /></span>
</Button>
</Link>


<Button  className=' purple-button'  onClick={handleDownload}>
<span> Download my CV <FontAwesomeIcon icon={faDownload} /></span>
</Button>
    </div>
    </Container>
    

  )
}

export default TimeLineExperience