import React, { useState } from "react";
import {
  VStack,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Text,
  Collapse,
  Link,
} from "@chakra-ui/react";
import { Project as SingleProject } from "./projectList";

interface ProjectProps {
  project: SingleProject;
}

const Project = ({ project }: ProjectProps): JSX.Element => {
  // Collapse sections
  const [showTech, setShowTech] = useState<boolean>(false);
  const [showExpanded, setShowExpanded] = useState<boolean>(false);
  const [showRole, setShowRole] = useState<boolean>(false);

  return (
    <VStack
      key={project.name}
      boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
      borderRadius="lg"
      border="1px solid white"
      justifyContent="space-between"
      alignContent="center"
      h="auto"
      py={6}
      px={2}
      w="100%"
    >
      <VStack w="90%" h="auto">
        <Heading mb={2} w="100%" textAlign="center" as="h4" size="md">
          {project.name}
        </Heading>
        <VStack
          justifyContent="center"
          alignContent="center"
          w="95%"
          spacing={5}
          pb={4}
        >
          <Text mb={2} textAlign="center" w="100%">
            {project.description}
          </Text>
          {project.tech && (
            <VStack w="100%" h="auto" spacing={2}>
              <Text textAlign="center" w="100%">
                {"The app was build on " + project.tech[0] + " and used:"}
              </Text>
              <Collapse in={showTech}>
                <UnorderedList spacing={2} w="100%" h="auto" textAlign="center">
                  {project.tech?.slice(1).map((line: string) => (
                    <ListItem key={line.replace(" ", "-")}>{line}</ListItem>
                  ))}
                </UnorderedList>
              </Collapse>
              <Button variant="collapse" onClick={() => setShowTech(!showTech)}>
                {showTech ? "...See Less" : "See More..."}
              </Button>
            </VStack>
          )}
          {project.expanded && (
            <VStack w="100%" h="auto" spacing={2}>
              <Text textAlign="center" w="100%">
                My team expaned the app by adding the following featured and
                functionality:
              </Text>
              <Collapse in={showExpanded}>
                <UnorderedList spacing={2} w="100%" h="auto" textAlign="center">
                  {project.expanded.map((line: string) => (
                    <ListItem key={line.replace(" ", "-")}>{line}</ListItem>
                  ))}
                </UnorderedList>
              </Collapse>
              <Button
                variant="collapse"
                onClick={() => setShowExpanded(!showExpanded)}
              >
                {showTech ? "...See Less" : "See More..."}
              </Button>
            </VStack>
          )}
          {project.role && (
            <VStack w="100%" h="auto" spacing={2}>
              <Text textAlign="center" w="100%">
                My role in this project was to:
              </Text>
              <Collapse in={showRole}>
                <UnorderedList spacing={2} w="100%" h="auto" textAlign="center">
                  {project.role?.map((line: string) => (
                    <ListItem key={line.replace(" ", "-")}>{line}</ListItem>
                  ))}
                </UnorderedList>
              </Collapse>
              <Button variant="collapse" onClick={() => setShowRole(!showRole)}>
                {showTech ? "...See Less" : "See More..."}
              </Button>
            </VStack>
          )}
          <Text textAlign="center" w="100%">
            {project.deployed}
          </Text>
        </VStack>
      </VStack>
      <Link href={project.link} rel="noopener" target="_blank">
        <Button variant="project">View Project</Button>
      </Link>
    </VStack>
  );
};

export default Project;
