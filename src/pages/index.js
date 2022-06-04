import { Flex, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import Link from "next/link";

import Col from '../comps/Misc/Col';
import Container from '../comps/Misc/Container';
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState('')
  const handleChange = (event) => setValue(event.target.value)

  return (
    <Container bg="darkBlue" color="primary" h="calc(100vh - var(--top-bar-height))">
      <Col colStart={3} colEnd={25} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Heading as="h1" variant="h1" mb={{ base: 8, lg: 16 }}>
          Wemanity Phone Test
        </Heading>

        <InputGroup maxW="50%">
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Search by ..."
            mb={{ base: 4, lg: 8 }}
          />

          <InputRightElement>
            <SearchIcon cursor="pointer" onClick={() => console.log(value)} />
          </InputRightElement>
        </InputGroup>

        <Flex w="50%" justifyContent="flex-end">
          <Link href="/new-entry" passHref>
            <Text as="a" textStyle="underlined">Add a new entry</Text>
          </Link>
        </Flex></Col>
    </Container>
  )
}
