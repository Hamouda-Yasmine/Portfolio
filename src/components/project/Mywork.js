
import  React from 'react';

import { Container } from 'react-bootstrap';
import Card from './Card';
import {  Box, Heading, VStack } from '@chakra-ui/react';
import { Divider, Stack } from '@mui/material';
function Mywork() {
  const projects = [
    {
      image:() => require("../../assets/img/Capture d'écran Portfolio.png"),
      title: "Portfolio",
      description:
        "  Development of a front-end web application using React. ",
      giturl:"",
      siteurl:"",
      technologies:"React",
    },
    {
      image:() => require("../../assets/img/Capture d'écran Portfolio.png"),
      title: "React Space",
      description:
        "Handy toolcomponents in a React app, with redux integration via middleware️",
      giturl:"",
      siteurl:"",
      technologies:"",
    },
    {
      image:() => require("../../assets/img/Capture d'écran Portfolio.png"),
      title: "React Space",
      description:
        "Handy tool belt app",
      giturl:"",
      siteurl:"",
      technologies:"",
    },
 
  ];
  
  return (
<Container >

    <VStack >
       <Stack direction="row"divider={<Divider orientation="vertical" flexItem />}spacing={2}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
       </Stack>
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      
      <Box  
      display="grid"
      gridTemplateColumns="repeat(3,minmax(0,1fr))"
      gridGap={8}>
        {projects.map((project) => (
          <Card
          image={project.image()}
            key={project.title}
            title={project.title}
            description={project.description}/>
        ))}
      </Box>
    </VStack>

  </Container>

  )
}

export default Mywork
