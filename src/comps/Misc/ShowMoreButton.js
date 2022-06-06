import { Button, Flex, Text } from "@chakra-ui/react";

const ShowMoreButton = ({ searchedTerm, show, handleToggle }) => (
  <Flex
    display={searchedTerm.length > 5 ? "flex" : "none"}
    justifyContent="center"
    alignItems="center"
    position="absolute"
    bottom={show ? "-40px" : "0px"}
    w="100%"
    bgGradient={
      show
        ? "linear(to top, rgba(8, 8, 23, 1), rgba(8, 8, 23, 1))"
        : "linear-gradient(to top, rgba(8, 8, 23, 1), rgba(8, 8, 23, 1), rgba(8, 8, 23, 1), rgba(8, 8, 23, 1), rgba(8, 8, 23, 0.8), rgba(8, 8, 23, 0))"
    }
    borderBottomRightRadius="6px"
    borderBottomLeftRadius="6px"
    zIndex={2}
  >
    <Button variant="unstyled" onClick={handleToggle}>
      <Text color="primary">Show {show ? "less" : "more"} results</Text>
    </Button>
  </Flex>
);

export default ShowMoreButton;
