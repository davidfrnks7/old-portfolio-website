import React from "react";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";

interface TimelineEntryProps {
  name: string; // name of school, program, or workplace
  year?: number; // year completed school or program
  desc: string; // desc of program or work role
  role?: string; // title of the role
  yearStart?: number; // year started working
  yearEnd?: number | null; // year completed working
}

const TimelineEntry = ({
  name,
  year,
  desc,
  role,
  yearStart,
  yearEnd
}: TimelineEntryProps): JSX.Element => {
  return (
    <HStack
      w="100%"
      h="100%"
      px={{ base: 3, md: 8, "2xl": "10%" }}
      justifyContent="center"
      alignContent="center"
      spacing={0}
    >
      <HStack
        bg="brand.content"
        h="100%"
        w="100%"
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
        <VStack
          w={{ base: "fit-contnet", md: "10vw" }}
          h="auto"
          justifyContent="center"
          alignContent="center"
        >
          <Heading as="h3" size="md">
            {name}
          </Heading>
          {role && (
            <Heading as="h4" size="sm">
              {role}
            </Heading>
          )}
          {year && <Text>{year}</Text>}
          {yearStart && (
            <HStack
              w="100%"
              h="100%"
              justifyContent="center"
              alignContent="center"
              spacing={2}
            >
              <Text>{yearStart}</Text>
              <Text>{"-"}</Text>
              {yearEnd === null ? (
                <Text>{"present"}</Text>
              ) : (
                <Text>{yearEnd}</Text>
              )}
            </HStack>
          )}
        </VStack>
        {/* Description */}
        <VStack w="100%" h="auto" justifyContent="center" alignContent="center">
          <Text>{desc}</Text>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default TimelineEntry;
