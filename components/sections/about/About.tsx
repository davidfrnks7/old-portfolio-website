import React from "react";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import davidFImage from "../../../public/images/davidFImage.jpg";
import Bio from "./Bio";

const About = (): JSX.Element => {
  return (
    <Box textAlign="center" w="100%" h="auto">
      <Heading as="h3" size="xl" mb={12} id="about" >
        About Me
      </Heading>
      <HStack
        boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
        borderRadius="2xl"
        border="1px solid white"
        justifyContent="center"
        alignContent="center"
        m="auto"
        h="auto"
        w="97%"
        d={{ base: "none", lg: "flex" }}
      >
        <Box p="20px" w="30%">
          <Image
            layout="responsive"
            src={davidFImage}
            alt="Picture of David Franks"
          />
        </Box>
        <Bio />
      </HStack>
      <VStack
        boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
        borderRadius="2xl"
        border="1px solid white"
        justifyContent="center"
        alignContent="center"
        m="auto"
        h="auto"
        w="97%"
        d={{ base: "flex", lg: "none" }}
      >
        <Box p="20px" w={{ base: "60%", md: "40%" }}>
          <Image
            layout="responsive"
            src={davidFImage}
            alt="Picture of David Franks"
          />
        </Box>
        <Bio />
      </VStack>
    </Box>
  );
};

export default About;
