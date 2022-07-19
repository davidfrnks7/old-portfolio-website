import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import TimelineEntry from "../../timeline-entry";
import work, { WorkPlace } from "./work";

const WorkHistory = (): JSX.Element => {
  return (
    <Box w="100%" h="auto" py="10vh" id="work">
      <Heading as="h2" mb={12}>
        {"Work Experience"}
      </Heading>
      {work.map((entry: WorkPlace) => {
        const { name, yearStart, yearEnd, role, desc } = entry;

        return (
          <TimelineEntry
            key={name.replace(" ", "") + yearStart + yearEnd}
            name={name}
            yearStart={yearStart}
            yearEnd={yearEnd}
            role={role}
            desc={desc}
          />
        );
      })}
    </Box>
  );
};

export default WorkHistory;
