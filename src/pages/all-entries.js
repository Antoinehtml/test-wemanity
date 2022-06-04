import { Flex, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Link from "next/link";


import Col from "../comps/Misc/Col";
import Container from "../comps/Misc/Container";

const AllEntries = ({ contacts }) => {
    return (
        <Container bg="darkBlue" color="primary" h="calc(100vh - var(--top-bar-height))">
            <Col
                colStart={3}
                colEnd={25}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Heading mb={{ base: 2, lg: 4 }}>All Entries</Heading>

                <Text textStyle="smallText">There is a total of {contacts.length} contacts for the moment</Text>

                {contacts.length > 0 ?
                    <Flex>
                        {contacts.map((contact, index) => (
                            <Flex key={`contact - ${index}`} flexDirection="column" mt={10} _notLast={{ mr: 8 }}>
                                <Text textTransform="capitalize">{contact.firstname} {contact.lastname}</Text>

                                <Text mb={2} textTransform="capitalize">{contact.phone}</Text>

                                <Link href={`/${contact._id}`} passHref>
                                    <Text as="a" textStyle="smallTextUnderlined">Edit this entry</Text>
                                </Link>
                            </Flex>
                        ))}
                    </Flex> : null}

            </Col>
        </Container>
    );
};

export default AllEntries;

AllEntries.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/contacts')
    const { data } = await res.json()

    return { contacts: data }
}