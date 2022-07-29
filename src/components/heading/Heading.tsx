import React from "react";
import { Heading as ChokHeading } from "@chakra-ui/react";

interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps): JSX.Element => {
  return (
    <ChokHeading w="100%" textAlign="center" as="h3" size="xl" mb={12}>
      {heading}
    </ChokHeading>
  );
};

export default Heading;
