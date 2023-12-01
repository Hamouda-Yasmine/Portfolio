import {  Button, Heading, HStack,  Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {FaFacebook,FaTwitter} from "react-icons/fa"
import { LinkIcon } from "@chakra-ui/icons";


const Card = ({ title, description, image, giturl,siteurl,
technologies}) => {

  return <VStack   color='black' backgroundColor='rgba(255, 255, 255, 0.2)' borderRadius='20px' boxShadow='rgba(67, 67, 91, 0.086) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' >
    <Image maxWidth="100%"  src={image} borderTopRadius='20px' />
   
   
    <VStack spacing={4} p={4} alignItems="start">
      <HStack justifyContent='space-between' alignItems='center'>
        <Heading as='h3' size='md'>{title}</Heading>
      </HStack>
      
     
      <Text color="#64748b" fontSize='lg'>{description}</Text>
    </VStack>
    <HStack alignItems='flex-start'>
      <a href={giturl}><AiFillGithub /></a>
      <a href={siteurl}><LinkIcon/></a>
        
    </HStack>
    <HStack>
  <Button colorScheme='facebook' iconSpacing={<FaFacebook />}>
   
  </Button>
  <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
  
  </Button>
</HStack>
   
  </VStack>;
};

export default Card;
