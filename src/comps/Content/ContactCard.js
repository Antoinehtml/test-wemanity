import { Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Link from "next/link";

const ContactCard = ({ contact, noEditOption }) => (
  <LinkBox
    position="relative"
    display="flex"
    flexDirection="column"
    alignItems="center"
    bg="darkBlue"
    px={{ base: 6, lg: 10 }}
    py={{ base: 4, lg: 8 }}
    role="group"
    _hover={noEditOption ? null : { bg: "mediumBlue" }}
    overflow="hidden"
  >
    <Text
      textStyle="mediumText"
      textTransform="capitalize"
      mb={{ base: 2, lg: 4 }}
    >
      {contact.firstname} {contact.lastname}
    </Text>

    <Text
      textStyle="smallText"
      textTransform="capitalize"
      mb={{ base: 2, lg: 4 }}
    >
      {contact.phone}
    </Text>

    <LinkOverlay
      href={`/${contact._id}`}
      display={noEditOption ? "none" : "flex"}
    >
      <Text
        textStyle="smallTextUnderlined"
        transform="translateX(-10px)"
        opacity={0}
        transition="all ease-in-out .3s"
        _groupHover={{ transform: "translateY(0px)", opacity: 1 }}
      >
        Edit this contact
      </Text>
    </LinkOverlay>
  </LinkBox>
);

export default ContactCard;
