import React from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { projects, Project } from "./projectList.ts";

const Projects = (): JSX.Element => {
  return (
    <VStack w="100%" h="auto" justifyContent="center" alignContent="center">
      <Heading as="h3" size="xl" mb={12}>
        Projects
      </Heading>
      <SimpleGrid
        columns={[3]}
        h="auto"
        justifyContent="flex-start"
        alignContent="center"
        // maxBlockSize="fit-content"
        // spacing="10px"
        d={{ base: "none", md: "grid" }}
        w="100%"
      >
        {projects.map((project: Project): JSX.Element => {
          return (
            <VStack
              key={project.name}
              boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
              borderRadius="lg"
              border="1px solid white"
              justifyContent="center"
              alignContent="center"
              mx="30px"
              mb="30px"
              h="auto"
              py={6}
              px={2}
            >
              <Heading mb={2} w="100%" textAlign="center" as="h4" size="md">
                {project.name}
              </Heading>
              <Box pb={4}>
                {project.description
                  .split("\n")
                  .map((line: string): JSX.Element => {
                    return (
                      <Text key={line.replace(" ", "-").toLowerCase()}>
                        {line}
                      </Text>
                    );
                  })}
              </Box>
              <Button href={project.link}>View Project</Button>
            </VStack>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default Projects;
