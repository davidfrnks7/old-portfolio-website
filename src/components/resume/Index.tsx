import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import Captcha from "../sections/contact/Captcha";

const ResumeComponent = (): JSX.Element => {
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Captcha
  const [token, setToken] = useState<null | string>(null);
  // Captcha reset
  const [reset, setReset] = useState<boolean>(false);

  return (
    <Box py={4}>
      <Button variant="contactSecondary" px={4} onClick={onOpen}>
        {"View My Resume"}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{token !== null ? "Resume Preview" : "Captcha Challenge"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignContent="center" justifyContent="center">
              {token === null ?
                (
                  <Captcha
                    updateToken={setToken}
                    shouldReset={reset}
                    updateReset={setReset}
                  />
                )
                :
                (
                  // <Box>
                  //   <iframe src={Resume} title="My Resume" />
                  // </Box>
                  <Fragment></Fragment>
                )
              }
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant='solid' colorScheme="red" mr={3} onClick={onClose}>
              {"Cancel"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ResumeComponent;
