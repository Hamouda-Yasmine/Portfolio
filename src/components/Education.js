import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import TimeLineMui from './TimeLineMui'
import { Button} from '@mui/material'
import './Education.css'
import TimeLineExperience from './TimeLineExperience'

function Education() {
  const [selectedSection,setSelectedSection]=useState('education');
  
 const timelineEducation = [
    { leval: 'Step 1: Introduction',
      place:'' ,
      year:2022},
      { leval: 'Step 1: Introduction',
      place:'' ,
      year:2022},
      { leval: 'Step 1: Introduction',
      place:'' ,
      year:2022},
   ];

   const timelineCertificate = [
    { name: 'Step 1: Introduction',
      place:'' ,
      year:2022},
      { name: 'Step 1: Introduction',
      place:'' ,
      year:2022},
     
   ];
  return (
    <section className='education'>
  <Container>
   <h4 style={{textAlign:'center',marginBottom:'10px',color:'gray'}}>My personal journey</h4>
  <div className='education-bx'>
  <Button color="secondary" style={{marginRight:'20px',marginBottom:'20px',background:selectedSection==='education'?'#f0b3f9a3':''}} onClick={()=>{setSelectedSection('education')}}>Education</Button>
  <Button color="secondary" style={{marginLeft:'20px',marginBottom:'20px',background:selectedSection==='experience'?'#f0b3f9a3':''}} onClick={()=>{setSelectedSection('experience')}}>experience</Button>
 
  
  {selectedSection==='education'? <TimeLineMui education={timelineEducation} certificate={timelineCertificate}/> : null}
  {selectedSection==='experience'?<TimeLineExperience/>:null}
    </div>  
  </Container>
 
    </section>
  
  )
}

export default Education