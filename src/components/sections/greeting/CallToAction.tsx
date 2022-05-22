import React, { Fragment } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import ContactButtons from "./ContactButtons";

const CallToAction = (): JSX.Element => {
  return (
    <Fragment>
      <HStack
        display={{ base: "none", md: "flex" }}
        h="auto"
        w="100%"
        spacing="6"
        justifyContent="center"
        alignContent="center"
      >
        <ContactButtons />
      </HStack>
      <VStack
        display={{ base: "flex", md: "none" }}
        h="auto"
        w="100%"
        spacing="4"
        justifyContent="center"
        alignContent="center"
      >
        <ContactButtons />
      </VStack>
    </Fragment>
  );
};

export default CallToAction;
