import React from "react";
import { Heading } from "@chakra-ui/layout";
import Typewritter from "typewriter-effect";

const TypeWriter = (): JSX.Element => {
  return (
    <Heading mt="1rem" mb="5vh" as="h2" size="xl">
      <Typewritter
        options={{
          strings: [
            "Software Engineer",
            "Full Stack Developer",
            "React.js Developer",
            "Creative Writer",
            "Gamer",
          ],
          autoStart: true,
          loop: true,
          cursor: "_",
        }}
      />
    </Heading>
  );
};

export default TypeWriter;
