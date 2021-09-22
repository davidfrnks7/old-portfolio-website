import React, { Fragment } from "react";
import { ButtonGroup, Link, Button, Text, IconButton } from "@chakra-ui/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin, faGithub);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactButtons = (): JSX.Element => {
  return (
    <Fragment>
      <Link>
        <Button
          variant="contactPrimary"
          boxShadow="xl"
          leftIcon={<FontAwesomeIcon icon={faLinkedin} />}
        >
          <Text>Connect with me</Text>
        </Button>
      </Link>
      <ButtonGroup variant="contactSecondary" isAttached boxShadow="xl">
        <Link href="https://github.com/davidfrnks7" target="_blank">
          <IconButton
            borderRadius="4px 0px 0px 4px"
            aria-label="Visit GitHub Page"
            mr="-px"
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
        </Link>
        <Link>
          <Button ml="-px" borderRadius="0px 4px 4px 0px">
            View my work
          </Button>
        </Link>
      </ButtonGroup>
    </Fragment>
  );
};

export default ContactButtons;
