import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import TimelineEntry from "../../timeline-entry";

const WorkHistory = (): JSX.Element => {
  return (
    <Box>
      <Heading mb={12}>{"Work History Section"}</Heading>
      <TimelineEntry />
    </Box>
  );
};

export default WorkHistory;
