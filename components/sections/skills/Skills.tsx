import React from "react";
import { VStack, Heading, Flex, Box } from "@chakra-ui/layout";
import icons, { IconTuple } from "./Icons";

const Skills = (): JSX.Element => {
  return (
    <VStack id="skills" w="100%" h="100vh">
      <Heading mt={36} mb={12}>
        Skills
      </Heading>
      <Flex>
        {icons.map((icon: IconTuple): JSX.Element => {
          return <Box key={icon[0]}>{singleIcon(icon)}</Box>;
        })}
      </Flex>
    </VStack>
  );
};

export default Skills;
