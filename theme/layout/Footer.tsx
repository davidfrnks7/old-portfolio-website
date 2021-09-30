import React from "react";
import {
  Box,
  Divider,
  HStack,
  Text,
  VStack,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Footer = (): JSX.Element => {
  return (
    <Box as="footer" w="100%" h="auto">
      <Divider />
      <VStack
        h="auto"
        w="auto"
        my={12}
        spacing={4}
        justifyItems="center"
        justifyContent="center"
      >
        <HStack spacing={2}>
          <Text fontSize="xl">Build with</Text>
          <Link href="https://nextjs.org/" target="_blank">
            <Icon fontSize="2.75rem" icon="logos:nextjs" />
          </Link>
        </HStack>
        <HStack spacing={2}>
          <Text fontSize="xl">Designed with</Text>
          <Link href="https://chakra-ui.com/" target="_blank">
            <Image
              alt="Chakra UI Logo"
              h="2rem"
              src="https://gist.githubusercontent.com/navin-moorthy/d4c5fe7f384a106ba8171eee77b45623/raw/3e4d37340270a38367bfe94dd2f7daea2a0537a2/chakra-ui-logo.svg"
            />
          </Link>
        </HStack>
        <HStack spacing={2}>
          <Text fontSize="xl">Deployed by</Text>
          <Link href="https://vercel.com/" target="_blank">
            <Icon fontSize="1.75rem" icon="logos:vercel" />
          </Link>
        </HStack>
        <VStack spacing={2}>
          <Link
            href="https://github.com/davidfrnks7/portfolio-website"
            target="_blank"
          >
            <Button
              variant="credits"
              leftIcon={<Icon icon="akar-icons:github-fill" />}
            >
              View Codebase
            </Button>
          </Link>
          <Text fontSize="xs">
            {" "}
            <span role="img" aria-label="copyright">
              ©
            </span>{" "}
            2021 - {new Date().getFullYear()} David Franks
          </Text>
        </VStack>
        <VStack spacing={0}>
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
