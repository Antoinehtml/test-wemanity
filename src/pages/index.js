import { useEffect, useMemo, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";

import Col from "../comps/Misc/Col";
import Container from "../comps/Misc/Container";

export default function Home() {
  const placeholders = useMemo(
    () => ["...", "first name", "last name", "phone number"],
    []
  );

  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [placeholder, setPlaceHolder] = useState("...");

  const handleChange = (event) => setValue(event.target.value);

  useEffect(() => {
    setPlaceHolder(placeholders[index]);
  }, [index, placeholders]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex(index === placeholders.length - 1 ? 0 : index + 1);
    }, 3000);
  }, [index, placeholder, placeholders.length]);

  return (
    <Container
      bg="darkBlue"
      color="primary"
      h="calc(100vh - var(--top-bar-height))"
    >
      <Col
        colStart={3}
        colEnd={25}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h1"
          variant="h1"
          mb={{ base: 8, lg: 16 }}
          textAlign={{ base: "center", lg: "left" }}
          textTransform="uppercase"
        >
          Wemanity Phonebook
        </Heading>

        <InputGroup maxW={{ base: "100%", lg: "50%" }}>
          <Input
            value={value}
            onChange={handleChange}
            placeholder={`Search by ${placeholder}`}
            mb={{ base: 4, lg: 8 }}
          />

          <InputRightElement>
            <SearchIcon cursor="pointer" onClick={() => console.log(value)} />
          </InputRightElement>
        </InputGroup>

        <Flex w={{ base: "100%", lg: "50%" }} justifyContent="flex-end">
          <Link href="/new-entry" passHref>
            <Text as="a" textStyle="underlined">
              Add a new entry
            </Text>
          </Link>
        </Flex>
      </Col>
    </Container>
  );
}
