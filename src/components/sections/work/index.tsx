import React from "react";
import { Box } from "@chakra-ui/react";
import TimelineEntry from "../../timeline-entry";
import work, { WorkPlace } from "./work";
import Heading from "../../heading/Heading";

const WorkHistory = (): JSX.Element => {
  return (
    <Box w="100%" h="auto" id="work">
      <Heading heading="Work Experience" />
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
