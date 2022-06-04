import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
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
} from '@chakra-ui/react';

import Container from '../../comps/Misc/Container';
import Col from '../../comps/Misc/Col';

const Contact = ({ contact }) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const router = useRouter()

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        if (isDeleting) {
            deleteContact()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDeleting])

    const deleteContact = async () => {
        const contactId = router.query.id

        try {
            const deleted = await fetch(`http://localhost:3000/api/contacts/${contactId}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        onClose()
                        setIsDeleting(false)

                        router.push('/all-entries')
                    }
                });
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true)
    }


    return (
        <Container bg="darkBlue" color="primary" minH="calc(100vh - var(--top-bar-height))">
            <Col colStart={3} colEnd={25} d="flex" justifyContent="center" alignItems="center" mt={10}>
                {isDeleting ? <Text>Deleting...</Text> :
                    <Flex flexDirection="column" alignItems="center" _notLast={{ mr: 8 }}>
                        <Text>{contact.firstname}</Text>

                        <Text>{contact.lastname}</Text>

                        <Text mb={8}>{contact.phone}</Text>

                        <Flex>
                            <Button variant="full_gradient" onClick={onOpen} mr={8}>
                                <Text>Delete</Text>
                            </Button>

                            <Link href={`/${contact._id}/edit`} passHref>
                                <Button variant="full_gradient" as="a">
                                    <Text>Edit</Text>
                                </Button>
                            </Link>
                        </Flex>
                    </Flex>
                }

                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />

                    <ModalContent>
                        <ModalHeader>Are you sure you want to delete this ?</ModalHeader>

                        <ModalCloseButton />

                        <ModalBody>
                            <Text>This action is irreversible...</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button variant="basic" mr={3} onClick={onClose}>Cancel</Button>

                            <Button variant="basic" onClick={handleDelete}>Yes I&apos;m sure</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Col>
        </Container>
    )
}



export default Contact

Contact.getInitialProps = async ({ query: { id } }) => {
    // ? fetch one result based on id
    const res = await fetch(`http://localhost:3000/api/contacts/${id}`)

    const { data } = await res.json()

    return { contact: data }
}