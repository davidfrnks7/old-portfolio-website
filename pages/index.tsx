import { Box } from "@chakra-ui/layout";
import React from "react";
import Greeting from "../components/sections/greeting/Greeting";

const IndexPage = (): JSX.Element => {
  return (
    <Box w="100%" h="100%">
      <Greeting />
    </Box>
  );
};

export default IndexPage;
