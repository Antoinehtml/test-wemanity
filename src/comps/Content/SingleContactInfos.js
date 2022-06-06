import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

import Container from "../Misc/Container";
import Col from "../Misc/Col";
import ContactCard from "./ContactCard";
import ModalDelete from "../Modals/ModalDelete";

const SingleContactInfos = ({ contact }) => {
  const router = useRouter();
  const { onOpen, onClose, isOpen } = useDisclosure();

  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      deleteContact();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting]);

  const deleteContact = async () => {
    const contactId = router.query.id;

    try {
      const deleted = await fetch(
        `http://localhost:3000/api/contacts/${contactId}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            onClose();
            setIsDeleting(false);

            router.push("/all-contacts");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
  };

  return (
    <Container color="primary">
      <Col
        colStart={{ base: 3, lg: 10 }}
        colEnd={{ base: 25, lg: 18 }}
        d="flex"
        justifyContent="center"
        alignItems="center"
        mt={10}
      >
        {!contact ? (
          <Flex>
            <Text>Loading contact info... </Text>

            <Spinner color="primary" />
          </Flex>
        ) : isDeleting ? (
          <Flex>
            <Text>Deleting...</Text>

            <Spinner color="primary" />
          </Flex>
        ) : (
          <>
            <ContactCard contact={contact.data} noEditOption />

            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              justifyContent="center"
              borderTop={{ base: null, lg: "1px solid #E4E7EC" }}
              mt={{ base: 8, lg: 0 }}
            >
              <Button
                variant="full_gradient"
                onClick={onOpen}
                mr={{ base: 0, lg: 0 }}
                w={{ base: "100%", lg: "50%" }}
                borderRight={{ base: null, lg: "1px solid #E4E7EC" }}
                borderBottom={{ base: "1px solid #E4E7EC", lg: null }}
              >
                <Text>Delete</Text>
              </Button>

              <Link href={`/${contact.data._id}/edit`} passHref>
                <Button
                  variant="full_gradient"
                  as="a"
                  w={{ base: "100%", lg: "50%" }}
                >
                  <Text>Edit</Text>
                </Button>
              </Link>
            </Flex>
          </>
        )}

        <ModalDelete
          handleDelete={handleDelete}
          isOpen={isOpen}
          onClose={onClose}
        />
      </Col>
    </Container>
  );
};

export default SingleContactInfos;
