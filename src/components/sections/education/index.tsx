import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import TimelineEntry from "../../timeline-entry";
import education, { Program } from "./education";

const Education = (): JSX.Element => {
  return (
    <Box w="100%" h="auto" py="10vh" id="education">
      <Heading as="h2" mb={12}>
        {"Education"}
      </Heading>
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
