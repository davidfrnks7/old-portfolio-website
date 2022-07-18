import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";

const TimelineEntry = (): JSX.Element => {
  return (
    <HStack
      w="100%"
      h="auto"
      px="10vw"
      justifyContent="center"
      alignContent="center"
    >
      <VStack
        w="fit-content"
        h="5vh"
        spacing={0}
        p={0}
        m={0}
        justifyContent="center"
        alignContent="center"
      >
        {/* Line Before */}
        <Box
          w={0}
          h="auto"
          p={0}
          pt={2}
          m={0}
          ml="1px"
          border="solid #FFF"
          borderWidth="0px 1px 0px 0px"
        >
        </Box>
        {/* Bullet Point */}
        <Box
          h="2rem"
          w="1.1rem"
          bg="brand.secondary"
          borderRadius="50%"
        >
        </Box>
        {/* Line After */}
        <Box
          w={0}
          h="100%"
          p={0}
          m={0}
          ml="1px"
          border="solid #FFF"
          borderWidth="0px 1px 0px 0px"
        >
        </Box>
      </VStack>
    </HStack >
  );
};

export default TimelineEntry;
