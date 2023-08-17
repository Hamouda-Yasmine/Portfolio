import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import {  Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faDownload, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function TimeLineMui() {
  return (
    <Timeline position="alternate">
    
        <TimelineItem>
    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
     2023
    </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector  />
        <TimelineDot color="secondary">
        <FontAwesomeIcon icon={faCertificate} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '13px', px: 2 }}>
        <Typography variant="h5" component="span">
        React Basics (Meta)
        </Typography>
        <Typography  > Coursera  </Typography>
      </TimelineContent>
    </TimelineItem>
    


<TimelineItem>
    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
     2022-2023
    </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector  />
        <TimelineDot color="secondary">
        <FontAwesomeIcon  icon={faCertificate}  />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '13px', px: 2 }}>
        <Typography variant="h5" component="span">
        CCNA 200-301 introduction to network
        </Typography>
        <Typography  > CISCO  </Typography>
      </TimelineContent>
    </TimelineItem>
    


    <TimelineItem>
    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
     2020-2022
    </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector  />
        <TimelineDot color="secondary">
        <FontAwesomeIcon icon={faGraduationCap} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '13px', px: 2 }}>
        <Typography variant="h5" component="span">
        Master's degree in software 
engineering
        </Typography>
        <Typography  > Abdelhamid Mehri University, Constantine  </Typography>
      </TimelineContent>
    </TimelineItem>
    
    <TimelineItem>
    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
     2020
    </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector  />
        <TimelineDot color="secondary">
        <FontAwesomeIcon icon={faGraduationCap} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h5" component="span">
        Bachelor degree in software engineering
        </Typography>
        <Typography  > Abdelhamid Mehri University, Constantine  </Typography>
      </TimelineContent>
    </TimelineItem>
    
    <TimelineItem>
    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
      2017
    </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector  />
        <TimelineDot color="secondary">
        <FontAwesomeIcon icon={faGraduationCap} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h5" component="span">
        Baccalaureate
        </Typography>
        <Typography  > Science  </Typography>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  )
}

export default TimeLineMui