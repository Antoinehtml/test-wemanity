import { Box, Heading, Text } from "@chakra-ui/react";
import Col from "../Misc/Col";
import Container from "../Misc/Container";

const AllContactsHeader = ({ numberContacts }) => (
  <Container bg="darkBlue" color="primary" py={{ base: 8, lg: 16 }}>
    <Col
      colStart={{ base: 3, lg: 5 }}
      colEnd={{ base: 25, lg: 23 }}
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Heading as="h1" variant="h1" whiteSpace="nowrap">
        All contacts
      </Heading>

      <Box
        w="100%"
        h="1px"
        bg="primary"
        ml={{ base: 2, lg: 24 }}
        mr={2}
        mt={{ base: 2, lg: 4 }}
      />

      <Text whiteSpace="nowrap">{numberContacts} contacts</Text>
    </Col>
  </Container>
);

export default AllContactsHeader;
