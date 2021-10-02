import React from "react";
import { Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { projects, Project as SingleProject } from "./projectList";
import Project from "./Project";

const Projects = (): JSX.Element => {
  return (
    <VStack
      id="projects"
      w="100%"
      h="auto"
      justifyContent="center"
      alignContent="center"
    >
      <Heading as="h3" size="xl" mb={6}>
        Projects
      </Heading>
      <SimpleGrid
        columns={{ base: 2, lg: 3 }}
        h="auto"
        justifyContent="flex-start"
        alignContent="center"
        d={{ base: "none", md: "grid" }}
        w="100%"
        spacing="30px"
        px="30px"
      >
        {projects.map((project: SingleProject): JSX.Element => {
          return (
            <Project key={project.name.replace(" ", "-")} project={project} />
          );
        })}
      </SimpleGrid>
      <VStack
        w="95%"
        h="auto"
        alignContent="center"
        justifyContent="center"
        d={{ base: "flex", md: "none" }}
        spacing={10}
      >
        {projects.map((project: SingleProject): JSX.Element => {
          return (
            <Project key={project.name.replace(" ", "-")} project={project} />
          );
        })}
      </VStack>
    </VStack>
  );
};

export default Projects;
