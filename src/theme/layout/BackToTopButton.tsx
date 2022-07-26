import React, { FC } from "react";
import { Button, Flex, Box, BoxProps } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);

interface BackToTopButtonProps {
  show: boolean;
  navTo: (refName: RefNames) => void;
}

const BackToTopButton: FC<BackToTopButtonProps> = ({
  show,
  navTo
}: BackToTopButtonProps) => {
  return (
    <Flex
      display={show ? "flex" : "none"}
      pos="fixed"
      top="85vh"
      right={{ base: "1.25rem", sm: "2rem", md: "3rem" }}
    >
      <MotionBox whileTap={{ scale: 0.9 }}>
        <Button variant="backToTop" onClick={() => navTo("Greeting")}>
          <Icon icon="akar-icons:chevron-up" />
        </Button>
      </MotionBox>
    </Flex>
  );
};

export default BackToTopButton;
