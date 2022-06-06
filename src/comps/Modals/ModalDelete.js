import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
} from "@chakra-ui/react";

const ModalDelete = ({ handleDelete, onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Are you sure you want to delete this ?</ModalHeader>

        <ModalCloseButton />

        <ModalBody mb={{ base: 4, lg: 8 }}>
          <Text textStyle="smallText">This action is irreversible...</Text>
        </ModalBody>

        <ModalFooter borderTop="1px solid #000" py={0} px={0}>
          <Button
            variant="basic"
            onClick={onClose}
            borderRight="1px solid #000"
          >
            Cancel
          </Button>

          <Button variant="basic" onClick={handleDelete}>
            Yes I&apos;m sure
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDelete;
