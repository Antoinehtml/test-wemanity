import { Flex, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";


import Col from "../comps/Misc/Col";
import Container from "../comps/Misc/Container";

const AllEntries = () => {
    return (
        <Container bg="darkBlue" color="primary" h="calc(100vh - var(--top-bar-height))">
            <Col
                colStart={3}
                colEnd={25}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Heading mb={{ base: 4, lg: 8 }}>All Entries</Heading>

                <Flex mt={10}>

                </Flex>

            </Col>
        </Container>
    );
};

export default AllEntries;
