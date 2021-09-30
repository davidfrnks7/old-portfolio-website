import React, { Fragment } from "react";
import { Button, HStack, Link } from "@chakra-ui/react";
import navItems, { NavItem } from "./navItems";

interface NavProps {
  sticky?: boolean;
}

const DesktopNav = ({ sticky }: NavProps): JSX.Element => {
  return (
    <Fragment>
      <HStack
        as="nav"
        d={{ base: "none", lg: "flex" }}
        h="auto"
        w="auto"
        spacing={4}
      >
        {navItems.map((navItem: NavItem) => {
          return (
            <Link key={navItem[0]} href={navItem[1]}>
              <Button variant={sticky ? "stickyNav" : "nav"}>
                {navItem[0]}
              </Button>
            </Link>
          );
        })}
      </HStack>
    </Fragment>
  );
};

export default DesktopNav;
