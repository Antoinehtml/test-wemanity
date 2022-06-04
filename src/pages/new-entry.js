import { useForm, Controller } from "react-hook-form";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import {
    Heading,
    FormControl,
    Input,
    Flex,
    FormErrorMessage,
    FormLabel,
    Button,
    Text,
} from "@chakra-ui/react";

import Col from "../comps/Misc/Col";
import Container from "../comps/Misc/Container";

const newEntry = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useForm();

    const onSubmit = () => { console.log('ok') }

    return (
        <Container bg="darkBlue" color="primary" h="calc(100vh - var(--top-bar-height))">
            <Col
                colStart={{ base: 3, md: 8 }}
                colEnd={{ base: 25, md: 20 }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Heading mb={{ base: 4, lg: 8 }}>New entry</Heading>


                <Flex
                    flexDirection="column"
                    as="form"
                    name="contactForm"
                    onSubmit={handleSubmit(onSubmit)}
                    align="flex-start"
                    w="100%"
                >
                    <FormControl
                        isRequired
                        isInvalid={errors.name?.message}
                        mb={{ base: 2, lg: 4 }}
                    >
                        <FormLabel mb={2}>What&apos;s your first name ?</FormLabel>

                        <Input
                            placeholder="your first name"
                            id="firstname"
                            name="firstname"
                            type="string"
                            {...register("firstname", {
                                required: "Please type in your first name",
                            })}
                        />

                        <FormErrorMessage>
                            {/* {errors.name?.message && (
        <ErrorField>{errors.name?.message}</ErrorField>
      )} */}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl
                        isRequired
                        isInvalid={errors.name?.message}
                        mb={{ base: 2, lg: 4 }}
                    >
                        <FormLabel mb={2}>What&apos;s your last name ?</FormLabel>

                        <Input
                            placeholder="your last name"
                            id="lastname"
                            name="lastname"
                            type="string"
                            {...register("lastname", {
                                required: "Please type in your last name",
                            })}
                        />

                        <FormErrorMessage>
                            {/* {errors.name?.message && (
        <ErrorField>{errors.name?.message}</ErrorField>
      )} */}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl
                        isRequired
                        isInvalid={errors.name?.message}
                        mb={{ base: 8, lg: 16 }}
                    >
                        <FormLabel mb={2}>What&apos;s your phone number ?</FormLabel>

                        <Input
                            placeholder="+32 02 3784350"
                            id="phone"
                            name="phone"
                            type="string"
                            {...register("phone", {
                                pattern: /\+[1-9]{2}\s{1}\d{2}\s{1}\d{6,10}/,
                            })}
                        />

                        <FormErrorMessage>
                            {/* {errors.name?.message && (
        <ErrorField>{errors.name?.message}</ErrorField>
      )} */}
                        </FormErrorMessage>
                    </FormControl>

                    <Button
                        variant="full_gradient"
                        type="submit"
                        isLoading={isSubmitting}
                        maxW={{ base: "100%", lg: "50%" }}
                        alignSelf="center"
                    >
                        <Text>
                            Envoyer
                        </Text>
                    </Button>
                </Flex>

            </Col>
        </Container>
    );
};

export default newEntry;
