import React from "react";
import { Heading } from "@chakra-ui/react";
import Typewritter from "typewriter-effect";

const TypeWriter = (): JSX.Element => {
  return (
    <Heading w="100%" h="auto" mt="1rem" mb="5vh" as="h3" size="xl">
      <Typewritter
        options={{
          strings: [
            "Software Engineer",
            "Full Stack Developer",
            "DevOps",
            "React.js Developer",
            "Java Developer",
            // "Creative Writer",
            "Passionate",
            "Dedicated",
            "Reliable",
            "Motivated"
            // "Gamer"
          ],
          autoStart: true,
          loop: true,
          cursor: "_"
        }}
      />
    </Heading>
  );
};

export default TypeWriter;
