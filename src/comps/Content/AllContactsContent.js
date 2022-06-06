import { SimpleGrid } from "@chakra-ui/react";

import Col from "../Misc/Col";
import Container from "../Misc/Container";
import ContactCard from "./ContactCard";

const AllContactsContent = ({ contacts }) => (
  <Container
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
      {contacts.length > 0 ? (
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 4, sm: 8, lg: 12 }}
        >
          {contacts.map((contact, index) => (
            <ContactCard key={`contact-${index}`} contact={contact} />
          ))}
        </SimpleGrid>
      ) : null}
    </Col>
  </Container>
);

export default AllContactsContent;
