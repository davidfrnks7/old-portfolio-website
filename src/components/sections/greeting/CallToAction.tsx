import React, { Fragment } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import ContactButtons from "./ContactButtons";

interface CallToActionProps {
  navTo: (refName: RefNames) => void;
}

const CallToAction = ({ navTo }: CallToActionProps): JSX.Element => {
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
        <ContactButtons navTo={navTo} />
      </HStack>
      <VStack
        display={{ base: "flex", md: "none" }}
        h="auto"
        w="100%"
        spacing="4"
        justifyContent="center"
        alignContent="center"
      >
        <ContactButtons navTo={navTo} />
      </VStack>
    </Fragment>
  );
};

export default CallToAction;
