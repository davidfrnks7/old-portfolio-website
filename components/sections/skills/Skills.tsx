import React from "react";
import { Heading, Box, SimpleGrid, Link } from "@chakra-ui/react";
import icons, { IconTuple } from "./Icons";

const Skills = (): JSX.Element => {
  return (
    <Box
      bg="brand.content"
      my="7vh"
      py="3vh"
      id="skills"
      textAlign="center"
      w="100%"
      h="auto"
      px={{ "2xl": "10%" }}
    >
      <Link name="skills" />
      <Heading as="h3" size="xl" mb="10vh">
        Skills
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
        h="auto"
        justifyContent="flex-start"
        alignContent="center"
        // d={{ base: "none", md: "grid" }}
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
    </Box>
  );
};

export default Skills;
