import React, { Fragment } from "react";
import {
  ButtonGroup,
  Link,
  Button,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const ContactButtons = (): JSX.Element => {
  return (
    <Fragment>
      <ButtonGroup variant="contactPrimary" isAttached boxShadow="xl">
        <Link
          href="https://www.linkedin.com/in/davidfrnks7/"
          rel="noopener"
          target="_blank"
        >
          <Button
            leftIcon={<Icon icon="brandico:linkedin-rect" />}
            ml="-px"
            borderRadius="4px 0px 0px 4px"
          >
            Connect with me
          </Button>
        </Link>
        <Tooltip
          label="Go to email form"
          openDelay={200}
          hasArrow
          bg="brand.secondary"
          color="whiteAlpha"
          fontSize="md"
        >
          <Link href="/#contact">
            <IconButton
              borderRadius="0px 4px 4px 0px"
              aria-label="Go to email form"
              // mr="-px"
              icon={<Icon icon="clarity:email-solid" />}
            />
          </Link>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup variant="contactSecondary" isAttached boxShadow="xl">
        <Link
          href="https://github.com/davidfrnks7"
          rel="noopener"
          target="_blank"
        >
          <Button
            leftIcon={<Icon icon="akar-icons:github-fill" />}
            ml="-px"
            borderRadius="4px 0px 0px 4px"
          >
            View my work
          </Button>
        </Link>
        <Tooltip
          label="Go to projects section"
          openDelay={200}
          hasArrow
          bg="brand.main"
          color="whiteAlpha"
          fontSize="md"
        >
          <Link href="/#projects">
            <IconButton
              borderRadius="0px 4px 4px 0px"
              aria-label="Go to projects section"
              // mr="-px"
              icon={<Icon icon="akar-icons:chevron-down" />}
            />
          </Link>
        </Tooltip>
      </ButtonGroup>
    </Fragment>
  );
};

export default ContactButtons;
