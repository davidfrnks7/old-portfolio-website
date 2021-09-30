import { Button, HStack, Link } from "@chakra-ui/react";
import React from "react";

interface NavProps {
  sticky?: boolean;
}

const Nav = ({ sticky }: NavProps): JSX.Element => {
  return (
    <HStack h="auto" w="auto" spacing={4}>
      <Link href="/#top">
        <Button variant={sticky ? "stickyNav" : "nav"}>Home</Button>
      </Link>
      <Link href="/#about">
        <Button variant={sticky ? "stickyNav" : "nav"}>About</Button>
      </Link>
      <Link href="/#skills">
        <Button variant={sticky ? "stickyNav" : "nav"}>Skills</Button>
      </Link>
      <Link href="/#projects">
        <Button variant={sticky ? "stickyNav" : "nav"}>Projects</Button>
      </Link>
      <Link href="/#contact">
        <Button variant={sticky ? "stickyNav" : "nav"}>Contact</Button>
      </Link>
    </HStack>
  );
};

export default Nav;
