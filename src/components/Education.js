import React from 'react'
import { Container } from 'react-bootstrap'
import TimeLineMui from './TimeLineMui'
import { Button, ButtonGroup } from '@mui/material'


function Education() {
 /* const timelineSteps = [
    { sentence: 'Step 1: Introduction' },
    { sentence: 'Step 2: Research' },
    { sentence: 'Step 3: Implementation' },
    // Add more steps as needed
  ];*/
  return (
    <section>
  <Container>
  <h1>Project Timeline</h1>
  <ButtonGroup   aria-label="text button group">
  <Button>Education</Button>
  <Button>experience</Button>
 
</ButtonGroup>
  <TimeLineMui/>
      
  </Container>
 
    </section>
  
  )
}

export default Education