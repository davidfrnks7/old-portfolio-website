import React from "react";
import { VStack, Heading, Box, SimpleGrid } from "@chakra-ui/react";
import icons, { IconTuple } from "./Icons";

const Skills = (): JSX.Element => {
  return (
    <VStack id="skills" w="100%" justifyContent="center" alignContent="center">
      <Heading as="h3" size="xl" mb={12}>
        Skills
      </Heading>
      <SimpleGrid
        columns={[6]}
        h="auto"
        justifyContent="flex-start"
        alignContent="center"
        // maxBlockSize="fit-content"
        d={{ base: "none", md: "grid" }}
      >
        {icons.map((icon: IconTuple): JSX.Element => {
          return (
            <Box key={icon[0]} h="auto" mx="10px" mb="30px">
              <Box
                h="100px"
                w="80px"
                fontSize="75px"
                color="blackAlpha.700"
                margin="auto"
              >
                {icon[1]}
              </Box>
              <Heading w="100%" textAlign="center" as="h4" size="md">
                {icon[0]}
              </Heading>
            </Box>
          );
        })}
      </SimpleGrid>
      <SimpleGrid
        columns={[3]}
        h="auto"
        justifyContent="flex-start"
        alignContent="center"
        // maxBlockSize="fit-content"
        d={{ base: "grid", md: "none" }}
      >
        {icons.map((icon: IconTuple): JSX.Element => {
          return (
            <Box key={icon[0]} h="auto" mx="10px" mb="30px">
              <Box
                h="100px"
                w="80px"
                fontSize="75px"
                color="blackAlpha.700"
                margin="auto"
              >
                {icon[1]}
              </Box>
              <Heading w="100%" textAlign="center" as="h4" size="md">
                {icon[0]}
              </Heading>
            </Box>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default Skills;
