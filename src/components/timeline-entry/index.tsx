import React from "react";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";

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
        h="100%"
        py={6}
        px={4}
        justifyContent="center"
        alignContent="center"
        spacing={0}
        border="solid #0086ff"
        borderWidth="0px 0px 0px 1px"
      >
        <Flex h="2.88rem" w="1.17rem" direction="column">
          <Box
            bg="brand.primary"
            h="100%"
            w="100%"
            borderRadius="50%"
            ml="-25px"
            mb="30px"
            boxShadow="rgba(0, 134, 255, 0.8) 0px 0px 15px, rgba(0, 134, 255, 0.65) 0px 0px 3px 1px"
          ></Box>
        </Flex>
        {/* Year and Location/Place */}
        <VStack w="10vw" h="auto" justifyContent="center" alignContent="center">
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
