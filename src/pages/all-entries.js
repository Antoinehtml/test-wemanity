import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";


import Col from "../comps/Misc/Col";
import Container from "../comps/Misc/Container";

const AllEntries = ({ contacts }) => {

    return (
        <Container bg="darkBlue" color="primary" minH="calc(100vh - var(--top-bar-height))" py={{ base: 8, lg: 16 }}>
            <Col
                colStart={3}
                colEnd={25}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Heading as="h1" variant="h1" mb={{ base: 2, lg: 4 }} textTransform="uppercase">All Entries</Heading>

                <Text textStyle="smallText">There is a total of {contacts.data.length} contacts for the moment</Text>


                {contacts.data.length > 0 ?
                    <SimpleGrid columns={4} spacing={8}>
                        {contacts.data.map((contact, index) => (
                            <Flex key={`contact - ${index}`} flexDirection="column" mt={10} _notLast={{ mr: 8 }}>
                                <Text textTransform="capitalize">{contact.firstname} {contact.lastname}</Text>

                                <Text mb={2} textTransform="capitalize">{contact.phone}</Text>

                                <Link href={`/${contact._id}`} passHref>
                                    <Text as="a" textStyle="smallTextUnderlined">Edit this entry</Text>
                                </Link>
                            </Flex>
                        ))}
                    </SimpleGrid> : null}

            </Col>
        </Container>
    );
};

export default AllEntries;

export async function getStaticProps(){
    const contacts = await fetch('http://localhost:3000/api/contacts').then((res) => res.json());

    return {
		props: { contacts },
        revalidate: 3600,
	};
}