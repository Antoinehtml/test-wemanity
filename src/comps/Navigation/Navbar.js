import { useState } from "react";
import Link from "next/link";
import { Flex, Icon, List, Text, useMediaQuery } from "@chakra-ui/react";

import Fullscreen from "./Fullscreen";

const Navbar = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      flexDirection="column"
      h="var(--top-bar-height)"
      w="100%"
      py={8}
      bg="transparent"
      color="primary"
      position="absolute"
      top="0"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={{ base: 4, lg: 16 }}
      >
        <Link href="/" passHref>
          <Text as="a" textTransform="uppercase" zIndex={11}>
            Wemanity
          </Text>
        </Link>

        {isLargerThan768 ? (
          <List d="flex">
            <Link href="/new-entry" passHref>
              <Text as="a" textStyle="underlined" mr={{ base: 4, lg: 8 }}>
                Add contact
              </Text>
            </Link>

            <Link href="/all-contacts" passHref>
              <Text as="a" textStyle="underlined">
                All contacts
              </Text>
            </Link>
          </List>
        ) : (
          <Icon
            boxSize="30px"
            onClick={() => setFullscreen(!fullscreen)}
            zIndex={11}
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g stroke="currentColor" strokeWidth="1">
                <line
                  x1="24"
                  y1="12"
                  x2="0"
                  y2="12"
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    transformOrigin: "center center",
                    transform: fullscreen
                      ? "rotate(45deg)"
                      : "rotate(0deg) translateY(-6px)",
                  }}
                />
                <line
                  x1="24"
                  y1="12"
                  x2="0"
                  y2="12"
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    transformOrigin: "center center",
                    transform: fullscreen ? "rotate(-45deg)" : "rotate(0deg)",
                  }}
                />
              </g>
            </g>
          </Icon>
        )}
      </Flex>

      {fullscreen && (
        <Fullscreen setFullscreen={setFullscreen} fullscreen={fullscreen} />
      )}
    </Flex>
  );
};

export default Navbar;
