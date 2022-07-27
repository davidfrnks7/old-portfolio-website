import React from "react";
import { Box } from "@chakra-ui/react";
import TimelineEntry from "../../timeline-entry";
import education, { Program } from "./education";
import Heading from "../../heading/Heading";

const Education = (): JSX.Element => {
  return (
    <Box w="100%" h="auto" id="education">
      <Heading heading="Education" />
      {education.map((entry: Program) => {
        const { name, year, desc } = entry;
        return (
          <TimelineEntry
            key={name.replace(" ", "") + year}
            name={name}
            year={year}
            desc={desc}
          />
        );
      })}
    </Box>
  );
};

export default Education;
