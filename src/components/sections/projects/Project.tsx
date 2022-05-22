import React, { FC, useState } from "react";
import {
  VStack,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Text,
  Collapse,
  Link,
  HStack,
  Box,
  BoxProps
} from "@chakra-ui/react";
import { Project as SingleProject } from "./projectList";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);

interface ProjectProps {
  project: SingleProject;
}

const Project: FC<ProjectProps> = ({ project }: ProjectProps) => {
  // Collapse sections
  const [showTech, setShowTech] = useState<boolean>(false);
  const [showExpanded, setShowExpanded] = useState<boolean>(false);
  const [showRole, setShowRole] = useState<boolean>(false);

  const {
    name,
    // date,
    description,
    tech,
    expanded,
    role,
    deployed,
    // logo,
    links
  } = project;

  return (
    <VStack
      key={name}
      boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
      borderRadius="lg"
      border="1px solid white"
      justifyContent="space-between"
      alignContent="center"
      h="auto"
      py={6}
      px={2}
      w="100%"
      bg="brand.content"
    >
      <VStack w="100%" px="2.5%" h="auto">
        <Heading mb={2} w="100%" textAlign="center" as="h4" size="md">
          {name}
        </Heading>
        <VStack
          justifyContent="center"
          alignContent="center"
          w="95%"
          spacing={5}
          pb={4}
        >
          <Text mb={2} textAlign="center" w="100%">
            {description}
          </Text>
          {tech && (
            <VStack w="100%" h="auto" spacing={2}>
              <Text textAlign="center" w="100%">
                {"The app was build on " + tech[0] + " and used:"}
              </Text>
              <Collapse in={showTech}>
                <UnorderedList textAlign="center" width="100%" m="auto">
                  {tech.slice(1).map((line: string) => (
                    <ListItem
                      textAlign="left"
                      ml={5}
                      key={line.replace(" ", "-")}
                    >
                      {line}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Collapse>
              <Button variant="collapse" onClick={() => setShowTech(!showTech)}>
                {showTech ? "...See Less" : "See More..."}
              </Button>
            </VStack>
          )}
          {expanded && (
            <VStack w="100%" h="auto" spacing={2}>
              <Text textAlign="center" w="100%">
                {
                  "My team expaned the app by adding the following featured and functionality:"
                }
              </Text>
              <Collapse in={showExpanded}>
                <UnorderedList textAlign="center" width="100%" m="auto">
                  {expanded?.map((line: string) => (
                    <ListItem
                      textAlign="left"
                      ml={5}
                      key={line.replace(" ", "-")}
                    >
                      {line}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Collapse>
              <Button
                variant="collapse"
                onClick={() => setShowExpanded(!showExpanded)}
              >
                {showExpanded ? "...See Less" : "See More..."}
              </Button>
            </VStack>
          )}
          {role && (
            <VStack w="100%" h="auto" spacing={2}>
              <Text textAlign="center" w="100%">
                {"My role in this project was to:"}
              </Text>
              <Collapse in={showRole}>
                <UnorderedList textAlign="center" width="100%" m="auto">
                  {role?.map((line: string) => (
                    <ListItem
                      textAlign="left"
                      ml={5}
                      key={line.replace(" ", "-")}
                    >
                      {line}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Collapse>
              <Button variant="collapse" onClick={() => setShowRole(!showRole)}>
                {showRole ? "...See Less" : "See More..."}
              </Button>
            </VStack>
          )}
          <Text textAlign="center" w="100%">
            {deployed}
          </Text>
        </VStack>
      </VStack>
      <HStack h="auto" w="min-content" spacing={3}>
        <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href={links.github} rel="noopener" target="_blank">
            <Button
              leftIcon={<Icon icon="akar-icons:github-fill" />}
              variant="project"
            >
              {"View Source Code"}
            </Button>
          </Link>
        </MotionBox>
        {links.website && (
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href={links.website} rel="noopener" target="_blank">
              <Button
                leftIcon={<Icon icon="akar-icons:globe" />}
                variant="project"
              >
                {"View Live"}
              </Button>
            </Link>
          </MotionBox>
        )}
      </HStack>
    </VStack>
  );
};

export default Project;
