import React from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import davidFImage from "../../../public/images/davidFImage.jpg";
import Bio from "./Bio";

const About = (): JSX.Element => {
  return (
    <Box textAlign="center" w="100%" h="100vh">
      <Heading mt={36} mb={12}>
        About Me
      </Heading>
      <HStack
        boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
        borderRadius="2xl"
        border="1px solid white"
        justifyContent="center"
        alignContent="center"
        m="0 auto"
        h="auto"
        w="97%"
      >
        <Box p="20px" w="30%">
          <Image
            layout="intrinsic"
            src={davidFImage}
            alt="Picture of David Franks"
          />
        </Box>
        <Bio />
      </HStack>
    </Box>
  );
};

export default About;
