import React from "react";
import { Button, Collapse, Link, VStack } from "@chakra-ui/react";
import navItems, { NavItem } from "./navItems";

interface NavProps {
  shouldOpen: boolean;
}

const DesktopNav = ({ shouldOpen }: NavProps): JSX.Element => {
  return (
    <Collapse
      in={shouldOpen}
      animateOpacity
    >
      <VStack
        as="nav"
        d={{ base: "flex", lg: "none" }}
        pos="relative"
        top="0"
        h="auto"
        w="100vw"
        spacing={4}
        mb={6}
        bg="brand.main"
      >
        {navItems.map((navItem: NavItem) => {
          return (
            <Link key={navItem[0]} href={navItem[1]}>
              <Button w="90vw" variant={"nav"}>{navItem[0]}</Button>
            </Link>
          );
        })}
      </VStack>
    </Collapse>
  );
};

export default DesktopNav;
