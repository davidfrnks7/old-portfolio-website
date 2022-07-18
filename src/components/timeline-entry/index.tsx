import React from "react";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";

const TimelineEntry = (): JSX.Element => {
  return (
    <HStack
      w="100%"
      h="100%"
      px="10vw"
      justifyContent="center"
      alignContent="center"
      spacing={0}
    >
      <HStack
        bg="brand.content"
        h="auto"
        py={6}
        px={4}
        justifyContent="center"
        alignContent="center"
        spacing={0}
      >
        {/* Year and Location/Place */}
        <VStack w="12vw" h="auto" justifyContent="center" alignContent="center">
          <Heading as="h3" size="md">
            {"Operation Spark"}
          </Heading>
          <Text>{"2021"}</Text>
        </VStack>
        {/* Description */}
        <VStack w="100%" h="auto" justifyContent="center" alignContent="center">
          <Text>
            {
              "1000 hour software engineering bootbamp derived from Hack Reactor, utilizing a lot of the same principals, methodologies, and material, focusing on functional webapp development in Javascript utilizing frameworks such as React, Angular, and Typescript. The course focused heavily on teamwork and working with a team to build projects and apps."
            }
          </Text>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default TimelineEntry;
