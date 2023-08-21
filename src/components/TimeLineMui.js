import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import {  Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function TimeLineMui(props) {
  return (
    <Timeline position="alternate">

    
    {props.certificate.map((step,index)=>(
      <TimelineItem key={index}>
    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
     {step.year}
    </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector  />
        <TimelineDot color="secondary">
        <FontAwesomeIcon icon={faCertificate} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '13px', px: 2 }}>
        <Typography variant="h6" component="span">
        {step.name}
        </Typography>
        <Typography  > {step.place} </Typography>
      </TimelineContent>
    </TimelineItem>

    ))}
      
      {props.education.map((step,index)=>(
     <TimelineItem key={index}>
     <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
     {step.year}
     </TimelineOppositeContent>
       <TimelineSeparator>
         <TimelineConnector  />
         <TimelineDot color="secondary">
         <FontAwesomeIcon icon={faGraduationCap} />
         </TimelineDot>
         <TimelineConnector />
       </TimelineSeparator>
       <TimelineContent sx={{ py: '13px', px: 2 }}>
         <Typography variant="h6" component="span">
         {step.level}
         </Typography>
         <Typography  > {step.place}  </Typography>
       </TimelineContent>
     </TimelineItem>

    ))}
    
  </Timeline>
  )
}

export default TimeLineMui