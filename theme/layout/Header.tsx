import React, { Fragment, useEffect, useState } from "react";
import {
  Link,
  Heading,
  HStack,
  Box,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = (): JSX.Element => {
  // Sticky Navbar
  const [stickyNavbar, setStickyNavbar] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.scrollY >= 1) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }
  };

  useEffect(() => {
    if (!window) {
      console.log("waiting for mount");
    } else if (window) {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  // Mobile Menu Icon && Open/Close
  const [open, setOpen] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const menuIcon = (): JSX.Element => {
    const iconType = {
      default: <Icon icon="bx:bx-menu-alt-right" />,
      hover: <Icon icon="bx:bx-menu" />,
      open: <Icon icon="bx:bx-x" />,
    };

    if (open) {
      return iconType.open;
    } else if (hover) {
      return iconType.hover;
    } else {
      return iconType.default;
    }
  };

  return (
    <VStack
      justifyContent={{ base: "flex-start", lg: "center" }}
      alignContent={{ base: "flex-start", lg: "center" }}
      w="100%"
      h="3rem"
      bg={stickyNavbar || open ? "brand.main" : "transparent"}
      py={{ base: "0", md: "0.9rem" }}
      px={{ base: "0.5rem", md: "1rem", lg: "2rem", xl: "3rem" }}
      transition=".5s ease"
      pos="sticky"
      top={0}
      zIndex={1000000}
    >
      <HStack
        w="100%"
        h="auto"
        alignItems="center"
        justifyContent="space-between"
        m="auto"
      >
        <Box w="auto" h="auto" d={{ base: "block", lg: "none " }}></Box>
        <Heading as="h1" size="md">
          <Link href="/">David Franks Portfolio Website</Link>
        </Heading>
        <DesktopNav sticky={stickyNavbar} />
        <IconButton
          aria-label="Mobile Nav Menu"
          icon={menuIcon()}
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          d={{ base: "inline-flex", lg: "none" }}
          w="auto"
          margin="auto"
        />
      </HStack>
      <MobileNav shouldOpen={open} />
    </VStack>
  );
};

export default Header;
