import { Button, HStack, Link } from "@chakra-ui/react";
import React from "react";

const Nav = (): JSX.Element => {
  return (
    <HStack
      h="auto"
      w="auto"
      spacing={2}
    >
      <Link
        href="/#top"
      >
        <Button
          variant="nav"
        >
          Home
        </Button>
      </Link>
      <Link
        href="/#about"
      >
        <Button
          variant="nav"
        >
          About
        </Button>
      </Link>
      <Link
        href="/#skills"
      >
        <Button
          variant="nav"
        >
          Skills
        </Button>
      </Link>
      <Link
        href="/#projects"
      >
        <Button
          variant="nav"
        >
          Projects
        </Button>
      </Link>
      <Link
        href="/#contact"
      >
        <Button
          variant="nav"
        >
          Contact
        </Button>
      </Link>
    </HStack>
  );
};

export default Nav;
