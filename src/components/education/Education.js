import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import TimeLineMui from './TimeLineMui'
import { Button} from '@mui/material'
import './Education.css'
import TimeLineExperience from './TimeLineExperience'

function Education() {
  const [selectedSection,setSelectedSection]=useState('education');
  
 const timelineEducation = [
    { level: `Master's degree in software engineering`,
      place:'Abdelhamid Mehri University, Constantine' ,
      year:2022},
      { level: `Bachelor's degree in software engineering`,
      place:'Abdelhamid Mehri University, Constantine' ,
      year:2020},
      { level: 'Baccalaureate',
      place:'Science' ,
      year:2017},
   ];

   const timelineCertificate = [
    { name: 'React Basics (Meta)',
      place:'coursera' ,
      year:2023},
      { name: 'CCNA 200-301 introduction to network',
      place:'CISCO' ,
      year:'2022-2023'},
     
   ];
   //const timelineExperience=[]
  return (
    <section className='education'>
  <Container  >
   <h4 style={{textAlign:'center',marginBottom:'20px',color:'#6a6a6a',fontSize:'40px'}}><strong>My personal journey</strong></h4>
  <div className='education-bx'>
  <Button color="secondary" style={{marginRight:'20px',marginBottom:'10px',background:selectedSection==='education'?'#f0b3f9a3':''}} onClick={()=>{setSelectedSection('education')}}>Education</Button>
  <Button color="secondary" style={{marginLeft:'20px',marginBottom:'10px',background:selectedSection==='experience'?'#f0b3f9a3':''}} onClick={()=>{setSelectedSection('experience')}}>experience</Button>
 
  
  {selectedSection==='education'? <TimeLineMui education={timelineEducation} certificate={timelineCertificate}/> : null}
  {selectedSection==='experience'?<TimeLineExperience/>:null}
    </div>  
  </Container>
 
    </section>
  
  )
}

export default Education