import React, { FC } from "react";
import { Button, HStack } from "@chakra-ui/react";
import navItems, { NavItem } from "./navItems";

interface DesktopNavProps {
  sticky?: boolean;
  handleNav: (string: RefNames) => void;
  highlight: RefNames | undefined;
}

const DesktopNav: FC<DesktopNavProps> = ({
  sticky,
  handleNav,
  highlight
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
            color={
              highlight && highlight === navItem[1] && sticky
                ? "#00aec1"
                : highlight && highlight === navItem[1] && !sticky
                  ? ""
                  : ""
            }
            border={
              highlight && highlight === navItem[1] && sticky
                ? "solid #00aec1"
                : highlight && highlight === navItem[1] && !sticky
                  ? ""
                  : ""
            }
            borderWidth={
              highlight && highlight === navItem[1] && sticky
                ? "0px 0px 2px 0px"
                : ""
            }
            borderRadius={
              highlight && highlight === navItem[1] && sticky ? "0%" : 8
            }
          >
            {navItem[0]}
          </Button>
        );
      })}
    </HStack>
  );
};

export default DesktopNav;
