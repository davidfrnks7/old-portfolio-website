import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Greeting = (): JSX.Element => {
  return (
    <Box
      w="100%"
      h="100vh"
      px={{ base: "3rem", lg: "3rem", xl: "5rem" }}
      textAlign="center"
      bgGradient="linear(to-b, gradient.100, gradient.200, gradient.300, gradient.400, gradient.500, gradient.600)"
    >
      <Heading
        pt="15vh"
        as="h2"
        size="lg"
      >
        Hello, I am David Franks
      </Heading>
      <Heading
        mt="3rem"
        pb="10vh"
        as="h2"
        size="lg"
      >
        Software Engineer
      </Heading>
    </Box>
  );
};

export default Greeting;
