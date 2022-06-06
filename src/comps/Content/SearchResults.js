import { Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import ContactCard from "./ContactCard";

const SearchResults = ({ searchedTerm, setSearchDisplayed }) => (
  <>
    <Heading as="h1" variant="h1" mb={{ base: 2, lg: 4 }}>
      Your results
    </Heading>

    <Text textStyle="smallText">
      You&apos;ve searched for &apos;e&apos; ...
    </Text>

    <Text textStyle="smallText">
      There is {searchedTerm.length} results that match your request
    </Text>

    <Flex justifyContent="flex-end" w="100%">
      <Button variant="unstyled" onClick={() => setSearchDisplayed(false)}>
        <Text w="fit-content" textStyle="underlined">
          Go back
        </Text>
      </Button>
    </Flex>

    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 4, sm: 8, lg: 12 }}
      color="primary"
    >
      {searchedTerm.map((search, index) => (
        <ContactCard key={`searched-contact-${index}`} contact={search} />
      ))}
    </SimpleGrid>
  </>
);

export default SearchResults;
