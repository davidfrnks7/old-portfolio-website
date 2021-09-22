import React, { Fragment } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import ContactButtons from "./ContactButtont";

const CallToAction = (): JSX.Element => {
  return (
    <Fragment>
      <HStack
        d={{ base: "none", md: "flex" }}
        h="auto"
        w="100%"
        spacing="6"
        justifyContent="center"
      >
        <ContactButtons />
      </HStack>
      <VStack
        d={{ base: "flex", md: "none" }}
        h="auto"
        w="100%"
        spacing="4"
        justifyContent="center"
      >
        <ContactButtons />
      </VStack>
    </Fragment>
  );
};

export default CallToAction;
