import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ResumeComponent from "../../resume/Index";
import CallToAction from "./CallToAction";
import TypeWriter from "./TypeWriter";

interface GreetingProps {
  navTo: (refName: RefNames) => void;
}

const Greeting = ({ navTo }: GreetingProps): JSX.Element => {
  return (
    <Box w="100%" h="100vh" textAlign="center" className="background">
      <Heading pt="35vh" as="h2" size="lg">
        {"Hello, I am David Franks"}
      </Heading>
      <TypeWriter />
      <CallToAction navTo={navTo} />
      <ResumeComponent />
    </Box>
  );
};

export default Greeting;
