import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import ContactCard from "../comps/Content/ContactCard";

import Col from "../comps/Misc/Col";
import Container from "../comps/Misc/Container";

const AllEntries = ({ contacts }) => {
  return (
    <Container
      bg="darkBlue"
      color="primary"
      minH="calc(100vh - var(--top-bar-height))"
      py={{ base: 8, lg: 16 }}
    >
      <Col
        colStart={3}
        colEnd={25}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h1"
          variant="h1"
          mb={{ base: 2, lg: 4 }}
          textTransform="uppercase"
        >
          All Contacts
        </Heading>

        <Text textStyle="smallText">
          There is a total of{" "}
          {contacts.contacts.length > 0 ? contacts.contacts.length : 0} contacts
          for the moment
        </Text>

        {contacts.contacts.length > 0 ? (
          <SimpleGrid columns={4} spacing={8}>
            {contacts.contacts.map((contact, index) => (
              <ContactCard key={`contact-${index}`} contact={contact} />
            ))}
          </SimpleGrid>
        ) : null}
      </Col>
    </Container>
  );
};

export default AllEntries;

export async function getStaticProps() {
  const contacts = await fetch("http://localhost:3000/api/contacts/").then(
    (res) => res.json()
  );

  return {
    props: { contacts },
    revalidate: 3600,
  };
}
