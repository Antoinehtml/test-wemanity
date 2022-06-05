import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const ContactCard = ({ contact }) => (
  <Flex flexDirection="column" alignItems="center" mt={10} _notLast={{ mr: 8 }}>
    <Text textTransform="capitalize">
      {contact.firstname} {contact.lastname}
    </Text>

    <Text mb={2} textTransform="capitalize">
      {contact.phone}
    </Text>

    <Link href={`/${contact._id}`} passHref>
      <Text as="a" textStyle="smallTextUnderlined">
        Edit this contact
      </Text>
    </Link>
  </Flex>
);

export default ContactCard;
