import React, { FC } from "react";
import { Button, HStack } from "@chakra-ui/react";
import navItems, { NavItem } from "./navItems";

interface DesktopNavProps {
  sticky?: boolean;
  handleNav: (string: RefNames) => void;
}

const DesktopNav: FC<DesktopNavProps> = ({
  sticky,
  handleNav
}: DesktopNavProps) => {
  return (
    <HStack
      as="nav"
      display={{ base: "none", lg: "flex" }}
      h="auto"
      w="auto"
      spacing={4}
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      {navItems.map((navItem: NavItem) => {
        return (
          <Button
            id={"dekstop-" + navItem[0]}
            key={navItem[0]}
            variant={sticky ? "stickyNav" : "nav"}
            onClick={() => handleNav(navItem[1])}
          >
            {navItem[0]}
          </Button>
        );
      })}
    </HStack>
  );
};

export default DesktopNav;
