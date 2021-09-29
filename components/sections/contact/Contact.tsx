import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ContactFrom from "./Form";

const Contact = (): JSX.Element => {
  return (
    <Box textAlign="center" w="100%" h="auto">
      <Heading as="h3" size="xl" mb={12}>
        Contact Me
      </Heading>
      <ContactFrom />
    </Box>
  );
};

export default Contact;
