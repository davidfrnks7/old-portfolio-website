import { Heading, HStack } from "@chakra-ui/layout";
import React from "react";
import Nav from "./Nav";

const Header = (): JSX.Element => {
  return (
    <HStack
      justifyContent="space-between"
      w="100%"
      h="auto"
      bg="transparent"
      py={{ base: "0.5rem", md: "0.9rem" }}
      px={{ base: "0.5rem", md: "1rem", lg: "2rem", xl: "3rem" }}
      transition=".3s ease"
      pos="absolute"
    >
      <Heading as="h1" size="md">
        {"David Franks Portfolio Website"}
      </Heading>
      <Nav />
    </HStack>
  );
};

export default Header;
