import React, { useEffect, useRef, useState } from "react";
import { AppProps } from "next/app";
import { Box, VStack } from "@chakra-ui/react";
import Layout from "../theme/layout";
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

  // Handles scrolling to specific sections of the page.
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

  // Menu Item Highlight

  const [visibleSection, setVisibleSection] = useState<RefNames | undefined>();

  const getSectionDimensions = (
    ele: HTMLDivElement
  ): { height: number; offsetTop: number; offsetBottom: number } => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      // Sections
      const sectionRefs: {
        section: RefNames;
        ref: React.MutableRefObject<HTMLDivElement | null>;
      }[] = [
        { section: "Greeting", ref: greetingRef },
        { section: "About", ref: aboutRef },
        { section: "Education", ref: educationRef },
        { section: "Work", ref: workRef },
        { section: "Skills", ref: skillsRef },
        { section: "Projects", ref: projectsRef },
        { section: "Contact", ref: contactRef }
      ];

      // Current Scroll Position
      const scrollPosition = window.scrollY + 200;

      // Find the selected ref
      const selected = sectionRefs.find(({ ref }) => {
        const ele = ref.current;

        if (ele !== null) {
          const { offsetBottom, offsetTop } = getSectionDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      // Set the selected section.
      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    // Invoke function and pass it into an event listener on scroll.
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <Layout {...pageProps} navTo={navTo} highlight={visibleSection}>
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
      <VStack
        w="100%"
        h="auto"
        pb="15vh"
        pos="sticky"
        zIndex={1}
        justifyItems="center"
        alignContent="center"
        spacing="15vh"
      >
        <Box m={0} p={0} w="100%" ref={greetingRef}>
          <Greeting navTo={navTo} />
        </Box>
        <Box m={0} p={0} w="100%" ref={aboutRef}>
          <About />
        </Box>
        <Box m={0} p={0} w="100%" ref={educationRef}>
          <Education />
        </Box>
        <Box m={0} p={0} w="100%" ref={workRef}>
          <WorkHistory />
        </Box>
        <Box m={0} p={0} w="100%" ref={skillsRef}>
          <Skills />
        </Box>
        <Box m={0} p={0} w="100%" ref={projectsRef}>
          <Projects />
        </Box>
        <Box m={0} p={0} w="100%" ref={contactRef}>
          <Contact />
        </Box>
      </VStack>
    </Layout>
  );
};

export default IndexPage;
