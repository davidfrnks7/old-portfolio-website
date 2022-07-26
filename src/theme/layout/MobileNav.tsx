import React, { FC, Fragment } from "react";
import { Button, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import navItems, { NavItem } from "./navItems";

interface MobileNavProps {
  handleNav: (string: RefNames) => void;
}

const MobileNav: FC<MobileNavProps> = ({ handleNav }: MobileNavProps) => {
  return (
    <MenuList
      as="nav"
      display={{ base: "block", lg: "none" }}
      bg="brand.main"
      h="auto"
      w="100%"
      p={0}
      border="none"
      boxShadow="none"
    >
      {navItems.map((navItem: NavItem, index: number) => {
        return (
          <MenuItem
            id={"mobile-" + navItem[0]}
            key={navItem[0]}
            w="auto"
            h="auto"
            p={0}
            _hover={{
              backgroundColor: "none"
            }}
            _focus={{
              backgroundColor: "none"
            }}
          >
            {index === 0 ? <MenuDivider /> : <Fragment></Fragment>}
            <Button
              w="100vw"
              variant={"nav"}
              p={0}
              m="auto"
              onClick={() => handleNav(navItem[1])}
            >
              {navItem[0]}
            </Button>
            <MenuDivider />
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default MobileNav;
