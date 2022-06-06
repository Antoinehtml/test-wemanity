import { useRouter } from "next/router";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const ModalNewEntry = ({ onClose, isOpen }) => {
  const router = useRouter();

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInRight"
      isCentered
    >
      <ModalOverlay />

      <ModalContent>
        <ModalCloseButton onClick={onClose} />

        <ModalHeader>Your contact has been successfully added !</ModalHeader>

        <ModalBody mb={{ base: 4, lg: 8 }}>
          <Text textStyle="smallText">
            Thank you for registering your phone number
          </Text>
        </ModalBody>

        <ModalFooter borderTop="1px solid #000" py={0} px={0}>
          <Button
            variant="basic"
            onClick={onClose}
            borderRight="1px solid #000"
          >
            Add a new one
          </Button>

          <Button variant="basic" onClick={() => router.push("/")}>
            Take me home
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalNewEntry;
