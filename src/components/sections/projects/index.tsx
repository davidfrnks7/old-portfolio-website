import React from "react";
import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import { projects, Project as SingleProject } from "./projectList";
import Project from "./Project";
import Heading from "../../heading/Heading";

const Projects = (): JSX.Element => {
  return (
    <Box id="projects" textAlign="center" w="100%" h="auto">
      <Heading heading="Projects" />
      <SimpleGrid
        columns={{ base: 2, xl: 3 }}
        h="auto"
        justifyContent="flex-start"
        alignContent="center"
        display={{ base: "none", md: "grid" }}
        w="100%"
        spacing={8}
        px={{ base: 3, md: 8, "2xl": "10%" }}
      >
        {projects.map((project: SingleProject): JSX.Element => {
          return (
            <Project key={project.name.replace(" ", "-")} project={project} />
          );
        })}
      </SimpleGrid>
      <VStack
        w="100%"
        h="auto"
        alignContent="center"
        justifyContent="center"
        display={{ base: "flex", md: "none" }}
        spacing={10}
        px={{ base: 3, md: 8 }}
      >
        {projects.map((project: SingleProject): JSX.Element => {
          return (
            <Project key={project.name.replace(" ", "-")} project={project} />
          );
        })}
      </VStack>
    </Box>
  );
};

export default Projects;
