import { VStack } from "@chakra-ui/react";
import React from "react";
import About from "../components/sections/about/About";
import Greeting from "../components/sections/greeting/Greeting";
import Skills from "../components/sections/skills/Skills";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";

const IndexPage = (): JSX.Element => {
  return (
    <VStack spacing="20%" w="100%" h="auto" mb="10%">
      <Greeting />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </VStack>
  );
};

export default IndexPage;
