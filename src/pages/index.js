import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Collapse,
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
import SearchResults from "../comps/Content/SearchResults";
import HomeHeader from "../comps/Headers/HomeHeader";
import ShowMoreButton from "../comps/Misc/ShowMoreButton";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [searchDisplayed, setSearchDisplayed] = useState(false);

  // ? Function for Collapse component(https://v0.chakra-ui.com/collapse)
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  // ? Catch input's value and set it in a State
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    const targetValue = event.target.value;

    const eventCapitalize =
      targetValue.charAt(0).toUpperCase() + targetValue.slice(1);

    setInputValue(eventCapitalize);
  };

  //? Change searchbar's placeholder value every 3sec
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
    <>
      <HomeHeader />

      <Container
        color="darkBlue"
        py={{ base: 8, lg: 16 }}
      >
        <Col
          colStart={3}
          colEnd={25}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {!searchDisplayed ? (
            <>
              <InputGroup
                maxW={{ base: "100%", lg: "50%" }}
                d="flex"
                flexDirection="column"
              >
                <Input
                  value={inputValue}
                  onChange={handleChange}
                  placeholder={`Search by ${placeholder}`}
                  mb={searchedTerm ? 0 : { base: 4, lg: 8 }}
                />

                {/* Dynamic Research */}
                {searchedTerm && searchedTerm.length > 0 ? (
                  // If there's an input and a match
                  <>
                    <Collapse startingHeight={300} in={show}>
                      <Flex
                        flexDirection="column"
                        bg="darkBlue"
                        color="primary"
                        borderBottomRightRadius="6px"
                        borderBottomLeftRadius="6px"
                        mb={searchedTerm ? { base: 4, lg: 8 } : 0}
                        zIndex={2}
                        position="relative"
                      >
                        {searchedTerm.map((search, index) => (
                          <Link
                            key={`search-name-${index}`}
                            href={`/${search._id}`}
                            passHref
                          >
                            <Text
                              as="a"
                              py={2}
                              px={4}
                              _hover={{ bg: "lightGray", color: "darkBlue" }}
                            >
                              {search.firstname} {search.lastname}
                            </Text>
                          </Link>
                        ))}
                      </Flex>
                    </Collapse>

                    <ShowMoreButton
                      searchedTerm={searchedTerm}
                      show={show}
                      handleToggle={handleToggle}
                    />
                  </>
                ) : searchedTerm ? (
                  // If there's an input but no match
                  <Flex
                    flexDirection="column"
                    bg="darkBlue"
                    color="primary"
                    borderBottomRightRadius="6px"
                    borderBottomLeftRadius="6px"
                    mb={{ base: 4, lg: 8 }}
                  >
                    <Text
                      as="a"
                      py={2}
                      px={4}
                      _hover={{ bg: "lightGray", color: "darkBlue" }}
                    >
                      Sorry, there&apos;s no match for this research...
                    </Text>
                  </Flex>
                ) : null}

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
              <SearchResults
                searchedTerm={searchedTerm}
                setSearchDisplayed={setSearchDisplayed}
              />
            )
          )}
        </Col>
      </Container>
    </>
  );
}
