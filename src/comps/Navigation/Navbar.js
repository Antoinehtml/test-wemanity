import { List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";

import Col from "../Misc/Col";
import Container from "../Misc/Container";

const Navbar = () => (
  <Container h="var(--top-bar-height)" bg="darkBlue" color="primary">
    <Col
      colStart={2}
      colEnd={26}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="/" passHref>
        <Text as="a" textTransform="uppercase">
          Wemanity
        </Text>
      </Link>

      <List d="flex">
        <Link href="/new-entry" passHref>
          <Text as="a" textStyle="underlined" mr={{ base: 4, lg: 8 }}>
            Add contact
          </Text>
        </Link>

        <Link href="/all-contacts" passHref>
          <Text as="a" textStyle="underlined">
            All contacts
          </Text>
        </Link>
      </List>
    </Col>
  </Container>
);

export default Navbar;
