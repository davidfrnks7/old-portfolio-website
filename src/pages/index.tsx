import React, { useRef } from "react";
import { AppProps } from "next/app";
import { Box } from "@chakra-ui/react";
import Layout from "../theme/layout/Layout";
import PillPity from "pill-pity";
import Greeting from "../components/sections/greeting";
import About from "../components/sections/about";
import Education from "../components/sections/education";
import WorkHistory from "../components/sections/work";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";

const IndexPage = ({ pageProps }: AppProps): JSX.Element => {
  // Section refs
  const greetingRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const navTo = (refName: RefNames): void => {
    switch (refName) {
      case "Greeting":
        greetingRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      case "About":
        aboutRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      case "Education":
        educationRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      case "Work":
        workRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      case "Skills":
        skillsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      case "Projects":
        projectsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
      case "Contact":
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        break;
    }
  };

  return (
    <Layout {...pageProps} navTo={navTo}>
      <PillPity
        pattern="circuit-board"
        as={Box}
        patternFill="brand.secondary"
        patternOpacity={0.2}
        bgColor=""
        pos="fixed"
        h="100%"
        w="100%"
        zIndex={0}
      ></PillPity>
      <Box
        textAlign="center"
        w="100%"
        h="auto"
        pb="10vh"
        pos="sticky"
        zIndex={1}
      >
        <Box m={0} p={0} ref={greetingRef}>
          <Greeting />
        </Box>
        <Box m={0} p={0} ref={aboutRef}>
          <About />
        </Box>
        <Box m={0} p={0} ref={educationRef}>
          <Education />
        </Box>
        <Box m={0} p={0} ref={workRef}>
          <WorkHistory />
        </Box>
        <Box m={0} p={0} ref={skillsRef}>
          <Skills />
        </Box>
        <Box m={0} p={0} ref={projectsRef}>
          <Projects />
        </Box>
        <Box m={0} p={0} ref={contactRef}>
          <Contact />
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
