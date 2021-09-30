import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import ContactFrom from "./Form";

const Contact = (): JSX.Element => {
  return (
    <VStack
      boxShadow={{ base: "none", md: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px" }}
      borderRadius={{ base: "none", md: "2xl" }}
      border={{ base: "none", md: "1px solid white" }}
      justifyContent="center"
      alignContent="center"
      py={8}
      h="auto"
      w={{ base: "100%", md: "95%" }}
    >
      <Heading as="h3" size="xl" mb={12}>
        Contact Me
      </Heading>
      <ContactFrom />
    </VStack>
  );
};

export default Contact;
