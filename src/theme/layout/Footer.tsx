import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  Link,
  Image,
  Button,
  BoxProps
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import BackToTopButton from "./BackToTopButton";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);

interface FooterProps {
  navTo: (refName: RefNames) => void;
}

const Footer = ({ navTo }: FooterProps): JSX.Element => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const lastScroll = useRef<number>(0);

  const handleScroll = (): void => {
    if (window.scrollY >= 500) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }

    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    lastScroll.current = currentScroll <= 0 ? 0 : currentScroll;
  };

  useEffect(() => {
    if (!window) {
      console.log("waiting for mount");
    } else if (window) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      bg="brand.footer"
      as="footer"
      w="100%"
      h="auto"
      pos="sticky"
      zIndex={1}
    >
      <BackToTopButton show={showBackToTop} navTo={navTo} />
      <VStack
        h="auto"
        w="auto"
        py={12}
        spacing={5}
        justifyItems="center"
        justifyContent="center"
      >
        <HStack color="brand.footerText" spacing={2}>
          <Text fontSize="xl">Built on</Text>
          <Link
            aria-label="Next.js"
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener"
          >
            <Icon fontSize="1.6rem" icon="logos:nextjs" />
          </Link>
        </HStack>
        <HStack color="brand.footerText" spacing={2}>
          <Text fontSize="xl">Designed with</Text>
          <Link
            aria-label="Chakra UI"
            href="https://chakra-ui.com/"
            rel="noopener"
            target="_blank"
          >
            <Image
              alt="Chakra UI Logo"
              h="2rem"
              src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true"
            />
          </Link>
        </HStack>
        <HStack color="brand.footerText" spacing={2}>
          <Text fontSize="xl">Deployed by</Text>
          <Link
            aria-label="Vercel"
            href="https://vercel.com/"
            rel="noopener"
            target="_blank"
          >
            <Icon fontSize="1.75rem" icon="logos:vercel" />
          </Link>
        </HStack>
        <VStack spacing={2}>
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://github.com/davidfrnks7/portfolio-website"
              target="_blank"
              rel="noopener"
            >
              <Button
                color="whiteAlpha"
                variant="credits"
                leftIcon={<Icon icon="akar-icons:github-fill" />}
              >
                View Codebase
              </Button>
            </Link>
          </MotionBox>
          <Text color="brand.footerText" fontSize="xs">
            <span role="img" aria-label="copyright">
              ©
            </span>{" "}
            2021 - {new Date().getFullYear()} David Franks
          </Text>
        </VStack>
        <VStack color="brand.footerText" spacing={0}>
          <Text fontSize="xs">
            A personal portfolio website for David Franks
          </Text>
          <Text fontSize="xs">
            Logos are copyright or trademarked to their respective organizations
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Footer;
