import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import davidFImage from "../../../public/images/davidFImage.jpg";
import Bio from "./Bio";

const About = (): JSX.Element => {
  return (
    <VStack w="100%" h="100vh" justifyContent="center">
      <HStack
        boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
        borderRadius="2xl"
        border="1px solid white"
        justifyContent="center"
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
    </VStack>
  );
};

export default About;
