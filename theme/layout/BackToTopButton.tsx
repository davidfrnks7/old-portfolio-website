import React from "react";
import { Button, Flex, Link } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

type direction = "down" | "up" | "top";

interface BackToTopButtonProps {
  scrollDirection: direction;
  show: boolean;
}

const BackToTopButton = ({
  scrollDirection,
  show,
}: BackToTopButtonProps): JSX.Element => {
  return (
    <Flex
      d={scrollDirection === "down" && show ? "flex" : "none"}
      pos="absolute"
      top="85vh"
      left="85vw"
    >
      <Link href="/#top">
        <Button>
          <Icon icon="akar-icons:chevron-up" />
        </Button>
      </Link>
    </Flex>
  );
};

export default BackToTopButton;
