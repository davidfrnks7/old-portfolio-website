import { VStack } from "@chakra-ui/react";
import React from "react";
import About from "../components/sections/about/About";
import Greeting from "../components/sections/greeting/Greeting";

const IndexPage = (): JSX.Element => {
  return (
    <VStack
      w="100%"
    >
      <Greeting />
      <About />
    </VStack>
  );
};

export default IndexPage;
