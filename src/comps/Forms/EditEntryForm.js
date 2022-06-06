import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

import {
  FormControl,
  Input,
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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import Container from "../../comps/Misc/Container";
import Col from "../../comps/Misc/Col";
import { InfoOutlineIcon, PhoneIcon } from "@chakra-ui/icons";

const EditEntryForm = ({ contact }) => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [form, setForm] = useState({
    firstname: contact.data.firstname,
    lastname: contact.data.lastname,
    phone: contact.data.phone,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const onSubmit = async (body) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/contacts/${router.query.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      )
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
        justifyContent="center"
        alignItems="center"
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
            <FormLabel>What&apos;s your first name ?</FormLabel>

            <InputGroup>
              <Input
                placeholder={form.firstname}
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
            <FormLabel>What&apos;s your last name ?</FormLabel>

            <InputGroup>
              <Input
                placeholder={form.lastname}
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
            <FormLabel>What&apos;s your phone number ?</FormLabel>

            <InputGroup>
              <Input
                placeholder={form.phone}
                id="phone"
                name="phone"
                type="string"
                {...register("phone", {
                  pattern: {
                    value: /\+[1-9]{2}\s{1}\d{2}\s{1}\d{6,10}/,
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
            mb={{ base: 8, lg: 0 }}
          >
            <Text>Update</Text>
          </Button>

          <Modal
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInRight"
            isCentered
          >
            <ModalOverlay />

            <ModalContent>
              <ModalCloseButton onClick={onClose} />

              <ModalHeader>
                Your contact has been successfully modified !
              </ModalHeader>

              <ModalBody>
                <Text textStyle="smallText">
                  Thank you for updating this infos
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button
                  variant="basic"
                  onClick={() => router.push("/all-entries")}
                  mr={{ base: 4, lg: 8 }}
                >
                  See all entries
                </Button>

                <Button variant="basic" onClick={() => router.push("/")}>
                  Take me home
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Col>
    </Container>
  );
};

export default EditEntryForm;
