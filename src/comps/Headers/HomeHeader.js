import { Box, Heading, Text } from "@chakra-ui/react";
import Col from "../Misc/Col";
import Container from "../Misc/Container";

const HomeHeader = () => (
  <Container
    bg="darkBlue"
    color="primary"
    pt={{ base: 24, lg: 48 }}
    pb={{ base: 16, lg: 32 }}
  >
    <Col
      colStart={{ base: 3, lg: 5 }}
      colEnd={{ base: 25, lg: 23 }}
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Heading as="h1" variant="h1">
        Wemanity Phonebook
      </Heading>
    </Col>
  </Container>
);

export default HomeHeader;
