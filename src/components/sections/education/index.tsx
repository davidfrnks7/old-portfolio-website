import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import TimelineEntry from "../../timeline-entry";

const Education = (): JSX.Element => {
  return (
    <Box>
      <Heading>{"Education Section"}</Heading>
      <TimelineEntry />
    </Box>
  );
};

export default Education;
