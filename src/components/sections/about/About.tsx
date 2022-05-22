import React from "react";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import davidFImage from "../../../../public/images/davidFImage.jpg";
import Bio from "./Bio";

const About = (): JSX.Element => {
  return (
    <Box
      px={{ base: 3, md: 8, "2xl": "10%" }}
      py="10vh"
      id="about"
      textAlign="center"
      w={"100%"}
      h="auto"
    >
      <Heading as="h3" size="xl" mb={12}>
        {"About Me"}
      </Heading>
      <HStack
        boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
        borderRadius="2xl"
        border="1px solid white"
        justifyContent="center"
        alignContent="center"
        m="auto"
        h="auto"
        w="100%"
        display={{ base: "none", lg: "flex" }}
        bg="brand.content"
        spacing={0}
      >
        <Box h="auto" w={{ lg: "30%", xl: "25%" }} m={6}>
          <Image
            layout="intrinsic"
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
        w="100%"
        display={{ base: "flex", lg: "none" }}
        bg="brand.content"
      >
        <Box mt={12} w={{ base: "80%", sm: "60%", md: "40%" }} h="auto">
          <Image
            layout="intrinsic"
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
