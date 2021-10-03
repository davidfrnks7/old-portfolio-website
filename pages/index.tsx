import { Box } from "@chakra-ui/react";
import React from "react";
import About from "../components/sections/about/About";
import Greeting from "../components/sections/greeting/Greeting";
import Skills from "../components/sections/skills/Skills";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";

const IndexPage = (): JSX.Element => {
  return (
    <Box bg="brand.background" textAlign="center" w="100%" h="auto" pb="10vh">
      <Greeting />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
};

export default IndexPage;
