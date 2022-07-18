import React from "react";
import { Box } from "@chakra-ui/react";
import PillPity from 'pill-pity';
import About from "../components/sections/about";
import Greeting from "../components/sections/greeting";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import Education from "../components/sections/education";
import WorkHistory from "../components/sections/work";

const IndexPage = (): JSX.Element => {
  return (
    <Box>
      <PillPity pattern="circuit-board" as={Box} patternFill="brand.primary" patternOpacity={0.2} bgColor="" pos="fixed" h="100%" w="100%" zIndex={0}>
      </PillPity>
      <Box textAlign="center" w="100%" h="auto" pb="10vh" pos="sticky" zIndex={1}>
        <Greeting />
        <About />
        <Education />
        <WorkHistory />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </Box>
  );
};

export default IndexPage;
