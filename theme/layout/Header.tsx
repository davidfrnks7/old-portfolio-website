import React, { useEffect, useRef, useState } from "react";
import { Heading, HStack, Box, IconButton, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = (): JSX.Element => {
  // Sticky Navbar, Scroll Direction, and Back to Top Button Visibility
  const [stickyNavbar, setStickyNavbar] = useState<boolean>(false);
  const lastScroll = useRef<number>(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | "top">(
    "top"
  );
  // const [scroll, setScroll] = useState<number>(0);

  const handleScroll = (): void => {
    // Sticky Nav
    if (window.scrollY >= 1) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }

    // Scroll Direction
    const currentScroll =
      window.scrollY || window.pageYOffset || document.body.scrollTop;

    if (currentScroll > lastScroll.current) {
      setScrollDirection("down");
    } else if (currentScroll <= 5) {
      setScrollDirection("top");
    } else {
      setScrollDirection("up");
    }

    lastScroll.current = currentScroll <= 0 ? 0 : currentScroll;
    // setScroll(lastScroll.current = currentScroll <= 0 ? 0 : currentScroll)
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
    <Box
      zIndex={1000000}
      w="100%"
      pos="fixed"
      top="0"
      alignItems={"center"}
      boxShadow={
        open
          ? "none"
          : stickyNavbar
          ? "rgba(0, 134, 255, 0.75) 0px 0px 15px, rgba(0, 134, 255, 0.5) 0px 0px 3px 1px"
          : "none"
      }
      bg={
        stickyNavbar
          ? open
            ? "brand.main"
            : "rgba(49, 56, 220, 0.9)"
          : "transparent"
      }
      d={
        scrollDirection === "down" || scrollDirection === "top"
          ? "block"
          : "none"
      }
      transition=".5s ease"
      borderRadius="0px 0px 10px 10px"
      _hover={{
        bg: stickyNavbar ? "brand.main" : "transparent",
        boxShadow: open
          ? "none"
          : stickyNavbar
          ? "rgba(0, 134, 255, 0.9) 0px 0px 15px, rgba(0, 134, 255, 0.7) 0px 0px 3px 1px"
          : "none",
      }}
    >
      {/* Logo | Site Name */}
      <Flex
        width="100%"
        justifyContent={{ base: "flex-start", sm: "center" }}
        alignItems="center"
        height={12}
        top={0}
        position="absolute"
        ml={4}
        d={{ base: "flex", lg: "none" }}
      >
        <Heading as="h1" fontSize="lg">
          David Franks Portfolio Website
        </Heading>
      </Flex>

      {/* Desktop Nav Items and Mobile Menu Button */}
      <Box h="auto" w="100%" px={4}>
        <Flex h={12} alignItems={"center"} justifyContent={"space-between"}>
          <HStack
            w="100%"
            h="auto"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box w="auto" d={{ base: "flex", lg: "none " }}></Box>
            <Box w="100%" d={{ base: "none", lg: "flex" }} m="auto">
              <Heading as="h1" size="md">
                David Franks Portfolio Website
              </Heading>
            </Box>
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
              variant="mobileNav"
            />
          </HStack>
        </Flex>

        <MobileNav updateOpen={setOpen} shouldOpen={open} />
      </Box>
    </Box>
  );
};

export default Header;
