import React, { Fragment, useEffect, useState } from "react";
import { Link, Heading, HStack } from "@chakra-ui/react";
import Nav from "./Nav";

const Header = (): JSX.Element => {
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

  return (
    <Fragment>
      <HStack
        justifyContent="space-between"
        w="100%"
        h="auto"
        bg={stickyNavbar ? "brand.main" : "transparent"}
        py={{ base: "0.5rem", md: "0.9rem" }}
        px={{ base: "0.5rem", md: "1rem", lg: "2rem", xl: "3rem" }}
        transition=".3s ease"
        pos="sticky"
        top={0}
        zIndex={1000000}
      >
        <Heading as="h1" size="md">
          <Link href="/">David Franks Portfolio Website</Link>
        </Heading>
        <Nav sticky={stickyNavbar} />
      </HStack>
    </Fragment>
  );
};

export default Header;
