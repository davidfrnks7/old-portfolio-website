import React from "react";
import { VStack, Heading, Box, SimpleGrid } from "@chakra-ui/layout";
import icons, { IconTuple } from "./Icons";

const Skills = (): JSX.Element => {
  return (
    <VStack id="skills" w="100%" h="100vh">
      <Heading mt={36} mb={12}>
        Skills
      </Heading>
      <SimpleGrid
        columns={[6]}
        spacing={20}
        h="auto"
        justifyContent="center"
        alignContent="center"
        // maxBlockSize="fit-content"
        // d={{ base: "none", md: "grid" }}
      >
        {icons.map((icon: IconTuple): JSX.Element => {
          return (
            <Box
              key={icon[0]}
              h="100px"
              w="100px"
              fontSize="75px"
              color="blackAlpha.700"
            >
              {icon[1]}
            </Box>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default Skills;
