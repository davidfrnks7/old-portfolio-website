import React, { Fragment } from "react";
import { ButtonGroup, Link, Button, IconButton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const ContactButtons = (): JSX.Element => {
  return (
    <Fragment>
      {/* <Link href="https://www.linkedin.com/in/davidfrnks7/" target="_blank">
        <Button
          variant="contactPrimary"
          boxShadow="xl"
          rightIcon={<Icon icon="brandico:linkedin-rect" />}
        >
          <Text>Connect with me</Text>
        </Button>
      </Link> */}
      <ButtonGroup variant="contactPrimary" isAttached boxShadow="xl">
        <Link href="https://www.linkedin.com/in/davidfrnks7/" target="_blank">
          <Button
            leftIcon={<Icon icon="brandico:linkedin-rect" />}
            ml="-px"
            borderRadius="4px 0px 0px 4px"
          >
            Connect with me
          </Button>
        </Link>
        <Link href="/#contact">
          <IconButton
            borderRadius="0px 4px 4px 0px"
            aria-label="Visit GitHub Page"
            // mr="-px"
            icon={<Icon icon="clarity:email-solid" />}
          />
        </Link>
      </ButtonGroup>
      <ButtonGroup variant="contactSecondary" isAttached boxShadow="xl">
        <Link href="https://github.com/davidfrnks7" target="_blank">
          <IconButton
            borderRadius="4px 0px 0px 4px"
            aria-label="Visit GitHub Page"
            mr="-px"
            icon={<Icon icon="akar-icons:github-fill" />}
          />
        </Link>
        <Link href="/#projects">
          <Button ml="-px" borderRadius="0px 4px 4px 0px">
            View my work
          </Button>
        </Link>
      </ButtonGroup>
    </Fragment>
  );
};

export default ContactButtons;
