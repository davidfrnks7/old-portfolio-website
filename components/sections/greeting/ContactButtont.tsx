import React, { Fragment } from "react";
import { ButtonGroup, Link, Button, Text, IconButton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const ContactButtons = (): JSX.Element => {
  return (
    <Fragment>
      <Link href="https://www.linkedin.com/in/davidfrnks7/">
        <Button
          variant="contactPrimary"
          boxShadow="xl"
          leftIcon={<Icon icon="brandico:linkedin-rect" />}
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
            icon={<Icon icon="akar-icons:github-fill" />}
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
