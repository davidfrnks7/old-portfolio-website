import React from "react"
import { Heading, HStack, Link, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button";

const CallToAction = (): JSX.Element => {
  return (
    <VStack
      w="100"
      h="auto"
      justifyContent="center"
    >
      <Heading
        as="h3"
        size="md"
      >
        {"Connect with me"}
      </Heading>
      <HStack>
        <Link>
          <Button>
            {"LinkedIn"}
          </Button>
        </Link>
      </HStack>
    </VStack>
  )
};

export default CallToAction;
