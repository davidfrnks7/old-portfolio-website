import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react"
import Image from 'next/image'
import davidFImage from "../../../public/images/davidFImage.jpg"

const About = (): JSX.Element => {
  return (
    <VStack
      // w="100%"
      h="100vh"
      justifyContent="center"
    >
      <HStack
        justifyContent="center"
        h="auto"
        w="100%"
      >
        <Box
          w="30vw"
        >
          <Image
            layout="intrinsic"
            src={davidFImage}
            alt="Picture of David Franks"
          />
        </Box>
        <Box
          w="70wh"
          bg="white"
        >
        </Box>
      </HStack>
    </VStack>
  )
}

export default About;
