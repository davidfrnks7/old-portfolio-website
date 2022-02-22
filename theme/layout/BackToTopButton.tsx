import React, { FC } from "react";
import { Button, Flex, Link, Box, BoxProps } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);

interface BackToTopButtonProps {
  show: boolean;
}

const BackToTopButton: FC<BackToTopButtonProps> = ({
  show
}: BackToTopButtonProps) => {
  return (
    <Flex
      d={show ? "flex" : "none"}
      pos="fixed"
      top="85vh"
      right={{ base: "1.25rem", sm: "2rem", md: "3rem" }}
    >
      <Link href="/#top">
        <MotionBox whileTap={{ scale: 0.9 }}>
          <Button variant="backToTop">
            <Icon icon="akar-icons:chevron-up" />
          </Button>
        </MotionBox>
      </Link>
    </Flex>
  );
};

export default BackToTopButton;
