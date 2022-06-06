/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import {
  Heading,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  FormErrorMessage,
  FormLabel,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import { PhoneIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import Container from "../Misc/Container";
import Col from "../Misc/Col";
import ModalNewEntry from "../Modals/ModalNewEntry";

const EntryForm = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (body) => {
    try {
      const res = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            onOpen();
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container color="darkBlue" py={{ base: 8, lg: 16 }}>
      <Col
        colStart={{ base: 3, md: 8 }}
        colEnd={{ base: 25, md: 20 }}
        display="flex"
        flexDirection="column"
      >
        <Flex
          flexDirection="column"
          as="form"
          name="contactForm"
          onSubmit={handleSubmit(onSubmit)}
          w="100%"
        >
          <FormControl
            isRequired
            isInvalid={errors.firstname?.message}
            mb={{ base: 2, lg: 4 }}
          >
            <FormLabel mb={2}>What&apos;s your first name ?</FormLabel>

            <InputGroup>
              <Input
                placeholder="your first name"
                id="firstname"
                name="firstname"
                type="string"
                {...register("firstname", {
                  pattern: {
                    value: /[^0-9]/,
                    message: "No number allowed",
                  },
                  required: "Please type in your first name",
                })}
              />

              <InputRightElement>
                <InfoOutlineIcon />
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>
              {(errors.firstname?.type === "required" &&
                "First name is required") ||
                (errors.firstname?.type === "pattern" && "No number allowed")}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={errors.lastname?.message}
            mb={{ base: 2, lg: 4 }}
          >
            <FormLabel mb={2}>What&apos;s your last name ?</FormLabel>

            <InputGroup>
              <Input
                placeholder="your last name"
                id="lastname"
                name="lastname"
                type="string"
                {...register("lastname", {
                  pattern: {
                    value: /[^0-9]/,
                    message: "No number allowed",
                  },
                  required: "Please type in your last name",
                })}
              />

              <InputRightElement>
                <InfoOutlineIcon />
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>
              {(errors.lastname?.type === "required" &&
                "First name is required") ||
                (errors.lastname?.type === "pattern" && "No number allowed")}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={errors.phone?.message}
            mb={{ base: 8, lg: 16 }}
          >
            <FormLabel mb={2}>What&apos;s your phone number ?</FormLabel>

            <InputGroup>
              <Input
                placeholder="+32 02 123456"
                id="phone"
                name="phone"
                type="string"
                {...register("phone", {
                  pattern: {
                    value: /\+[0-9]{2}\s{1}\d{2}\s{1}\d{6,10}/,
                    message: "Invalid phone format",
                  },
                })}
              />

              <InputRightElement>
                <PhoneIcon />
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
          </FormControl>

          <Button
            variant="full_gradient"
            type="submit"
            isLoading={isSubmitting}
            maxW={{ base: "100%", lg: "50%" }}
            alignSelf="center"
          >
            <Text>Envoyer</Text>
          </Button>

          <ModalNewEntry onClose={onClose} isOpen={isOpen} />
        </Flex>
      </Col>
    </Container>
  );
};

export default EntryForm;
