import React from "react";
import { Box } from "@chakra-ui/react";
import About from "../components/sections/about/About";
import Greeting from "../components/sections/greeting/Greeting";
import Skills from "../components/sections/skills/Skills";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";
import Education from "../components/sections/education";
import WorkHistory from "../components/sections/work";

const IndexPage = (): JSX.Element => {
  return (
    <Box textAlign="center" w="100%" h="auto" pb="10vh">
      <Greeting />
      <About />
      <Education />
      <WorkHistory />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
};

export default IndexPage;
