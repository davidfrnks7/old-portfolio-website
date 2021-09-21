import React from "react";
import { HStack, Link, Text, VStack } from "@chakra-ui/layout";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faGithub)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CallToAction = (): JSX.Element => {
  return (
    <HStack
      h="auto"
      w="100%"
      spacing="4"
      justifyContent="center"
    >
      <Link>
        <Button
          variant="contactPrimary"
          leftIcon={
            <FontAwesomeIcon
              icon={faLinkedin}
            />
          }
        >
          <Text>Connect with me</Text>
        </Button>
      </Link>
      <ButtonGroup
        variant="contactPrimary"
        isAttached
      >
        <Link>
          <IconButton
            aria-label="Visit GitHub Page"
            icon={
              <FontAwesomeIcon
                icon={faGithub}
              />
            }
          />
        </Link>
        <Link>
          <Button>View my work</Button>
        </Link>
      </ButtonGroup>
    </HStack>
  );
};

export default CallToAction;
