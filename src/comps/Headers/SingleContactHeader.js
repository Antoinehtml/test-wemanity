import { Heading } from "@chakra-ui/react";
import Col from "../Misc/Col";
import Container from "../Misc/Container";

const SingleContactHeader = ({ contact }) => (
  <Container bg="darkBlue" color="primary" py={{ base: 8, lg: 16 }}>
    <Col
      colStart={{ base: 3, lg: 5 }}
      colEnd={{ base: 25, lg: 23 }}
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Heading as="h1" variant="h1" whiteSpace="nowrap">
        Contact
      </Heading>
    </Col>
  </Container>
);

export default SingleContactHeader;