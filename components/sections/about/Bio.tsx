import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import bio from "./bio";

const Bio = (): JSX.Element => {
  return (
    <VStack
      alignContent="start"
      justifyContent="start"
      spacing={4}
      h="auto"
      w="100%"
      px={{ base: 6 }}
      pr={{ md: 6 }}
      pl={{ md: 0 }}
      pt={6}
      pb={8}
    >
      {bio.split("\n").map((line) => (
        <Text key={line.replace(" ", "-")} w="100%" textAlign="justify">
          {line}
        </Text>
      ))}
    </VStack>
  );
};

export default Bio;
