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
      px="20px"
      py="15px"
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
