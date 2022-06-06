import { Box, Button, List, Text } from "@chakra-ui/react";
import Link from "next/link";

const Fullscreen = ({ setFullscreen, fullscreen }) => (
  <List
    display="flex"
    flexDirection="column"
    w="100%"
    bg="darkBlue"
    color="primary"
    zIndex={10}
  >
    <Box borderBottom="1px solid #E4E7EC">
      <Link href="/" passHref>
        <Button variant="unstyled" onClick={() => setFullscreen(false)}>
          <Text as="a" textStyle="mediumText" px={{ base: 4, lg: 8 }}>
            Home
          </Text>
        </Button>
      </Link>
    </Box>

    <Box borderBottom="1px solid #E4E7EC">
      <Link href="/new-entry" passHref>
      <Button variant="unstyled" onClick={() => setFullscreen(false)}>
        <Text as="a" textStyle="mediumText" px={{ base: 4, lg: 8 }}>
          Add contact
        </Text></Button>
      </Link>
    </Box>

    <Box borderBottom="1px solid #E4E7EC">
      <Link href="/all-contacts" passHref>
      <Button variant="unstyled" onClick={() => setFullscreen(false)}>
        <Text as="a" textStyle="mediumText" px={{ base: 4, lg: 8 }}>
          All contacts
        </Text></Button>
      </Link>
    </Box>
  </List>
);

export default Fullscreen;
