import React from "react";
import { Text, VStack } from "@chakra-ui/react";

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
      <Text align="justify" w="100%">
        {
          "I am a creative, fast learning, and problem solving bootcamp grad aspiring to make the web more safe, secure, accessible, and privacy focused. I am excited to start my software engineering career using the knowledge and skills I have quickly learned from the 6 month, 1000+ hour coding course where I was taught the fundamentals of JavaScript, TypeScript, MongoDB, PostgreSQL, and how to build an app from the ground up with React and React frameworks as well as the importance of accessibility (A11y & W3 compliance) online and in apps."
        }
      </Text>
      <Text align="justify" w="100%">
        {
          "I've had a passion for technology since I was young and built my first website in high school using a cms. Watching my ideas come to life before my eyes, where people were 1 tap or click away form seeing it, is what led me to eventually pursue a career in web development and software engineering."
        }
      </Text>
      <Text align="justify" w="100%">
        {
          "Solving the challenges and problems presented to me through my coursework was extremely rewarding. I'm enthralled by the thought of taking these skills and translating them into solving real world problems. Especially if I am doing that throughout my entire career."
        }
      </Text>
      <Text align="justify" w="100%">
        {
          "What I love the most about software engineering is there are always many ways to solve the problems presented to you. Having to come up with your own idea to solve them keeps things fresh and interesting. Especially reviewing your past solutions to optimize them."
        }
      </Text>
      <Text align="justify" w="100%">
        {
          "There is always something new to learn in software and coding. It's an ever-changing field and I am happy to become a part of it."
        }
      </Text>
    </VStack>
  );
};

export default Bio;
