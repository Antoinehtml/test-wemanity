import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";
import useSWR from "swr";

import Col from "../comps/Misc/Col";
import Container from "../comps/Misc/Container";
import ContactCard from "../comps/Content/ContactCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [searchDisplayed, setSearchDisplayed] = useState(false);

  // ? Catch input's value and set it in a State
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //? Change placeholder'value every 3sec
  const placeholders = useMemo(
    () => ["...", "first name", "last name", "phone number"],
    []
  );

  const [index, setIndex] = useState(0);
  const [placeholder, setPlaceHolder] = useState("...");

  useEffect(() => {
    setPlaceHolder(placeholders[index]);
  }, [index, placeholders]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex(index === placeholders.length - 1 ? 0 : index + 1);
    }, 3000);
  }, [index, placeholder, placeholders.length]);

  // ? Data fetching through SWR
  const { data, error } = useSWR("/api/contacts", fetcher);

  let contacts = [...new Set(data?.contacts.map((contact) => contact))];

  const searchedTerm =
    inputValue !== ""
      ? contacts.filter((contact) => {
          return (
            contact.firstname.includes(inputValue) ||
            contact.lastname.includes(inputValue) ||
            contact.phone.includes(inputValue)
          );
        })
      : null;

  if (error) {
    return <div>Error... </div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      bg="darkBlue"
      color="primary"
      minH="calc(100vh - var(--top-bar-height))"
      py={searchDisplayed ? { base: 8, lg: 16 } : 0}
    >
      <Col
        colStart={3}
        colEnd={25}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {!searchDisplayed ? (
          <>
            <Heading
              as="h1"
              variant="h1"
              mb={{ base: 8, lg: 16 }}
              textAlign={{ base: "center", lg: "left" }}
              textTransform="uppercase"
            >
              Wemanity Phonebook
            </Heading>

            <InputGroup
              maxW={{ base: "100%", lg: "50%" }}
              d="flex"
              flexDirection="column"
            >
              <Input
                value={inputValue}
                onChange={handleChange}
                placeholder={`Search by ${placeholder}`}
                position="relative"
                mb={searchedTerm ? 0 : { base: 4, lg: 8 }}
              />

              {/* <Flex
                position="absolute"
                bottom="0px"
                w="100%"
                bg="primary"
                color="darkblue"
                borderBottomRightRadius="6px"
                borderBottomLeftRadius="6px"
                py={2}
                px={4}
              >
                <Text>Elea</Text>
              </Flex> */}

              {/* Dynamic Research */}
              {searchedTerm && (
                <Flex
                  flexDirection="column"
                  bg="primary"
                  color="darkblue"
                  borderBottomRightRadius="6px"
                  borderBottomLeftRadius="6px"
                  mb={searchedTerm ? { base: 4, lg: 8 } : 0}
                  mt={-1}
                  zIndex={2}
                >
                  {searchedTerm.map((search, index) => (
                    <Link
                      key={`search-name-${index}`}
                      href={`/${search._id}`}
                      passHref
                    >
                      <Text
                        as="a"
                        _notLast={{ borderBottom: "1px solid #000" }}
                        py={2}
                        px={4}
                        _hover={{ bg: "red" }}
                      >
                        {search.firstname} {search.lastname}
                      </Text>
                    </Link>
                  ))}
                </Flex>
              )}

              <InputRightElement>
                <SearchIcon
                  cursor="pointer"
                  onClick={() => searchedTerm && setSearchDisplayed(true)}
                />
              </InputRightElement>
            </InputGroup>

            <Flex w={{ base: "100%", lg: "50%" }} justifyContent="flex-end">
              <Link href="/new-entry" passHref>
                <Text as="a" textStyle="underlined">
                  Add a new entry
                </Text>
              </Link>
            </Flex>
          </>
        ) : (
          searchedTerm && (
            <>
              <Heading as="h1" variant="h1" mb={{ base: 2, lg: 4 }}>
                Your results
              </Heading>

              <Text textStyle="smallText">
                There is {searchedTerm.length} results to your request
              </Text>

              <Button
                variant="unstyled"
                onClick={() => setSearchDisplayed(false)}
              >
                <Text w="fit-content" textStyle="underlined">
                  Go back
                </Text>
              </Button>

              <SimpleGrid columns={4} spacing={8}>
                {searchedTerm.map((search, index) => (
                  <ContactCard
                    key={`searched-contact-${index}`}
                    contact={search}
                  />
                ))}
              </SimpleGrid>
            </>
          )
        )}
      </Col>
    </Container>
  );
}
