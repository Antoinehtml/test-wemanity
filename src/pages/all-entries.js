import {
    Heading,
} from "@chakra-ui/react";

import Col from "../comps/Misc/Col";
import Container from "../comps/Misc/Container";

const AllEntries = () => {
    return (
        <Container>
            <Col
                colStart={3}
                colEnd={25}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Heading mb={{ base: 4, lg: 8 }}>All Entries</Heading>

            </Col>
        </Container>
    );
};

export default AllEntries;
