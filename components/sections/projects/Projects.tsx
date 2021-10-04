import React from "react";
import { Box, Heading, Link, SimpleGrid, VStack } from "@chakra-ui/react";
import { projects, Project as SingleProject } from "./projectList";
import Project from "./Project";

const Projects = (): JSX.Element => {
  return (
    <Box py="10vh" id="skills" textAlign="center" w="100%" h="auto">
      <Link name="projects" />
      <Heading as="h3" size="xl" mb={12}>
        Projects
      </Heading>
      <SimpleGrid
        columns={{ base: 2, xl: 3 }}
        h="auto"
        justifyContent="flex-start"
        alignContent="center"
        d={{ base: "none", md: "grid" }}
        w="100%"
        spacing={8}
        px={{ base: 3, md: 8 }}
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
        d={{ base: "flex", md: "none" }}
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
