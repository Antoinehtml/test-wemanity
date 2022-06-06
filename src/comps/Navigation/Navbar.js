import { useState } from "react";
import Link from "next/link";
import { Flex, Icon, List, Text, useMediaQuery } from "@chakra-ui/react";

import Fullscreen from "./Fullscreen";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

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
              <Text
                position="relative"
                as="a"
                textStyle={
                  router.pathname === "/new-entry"
                    ? "regularText"
                    : "bold_underlined"
                }
                mr={{ base: 4, lg: 8 }}
                _after={
                  router.pathname === "/new-entry"
                    ? {
                        content: "''",
                        position: "absolute",
                        bottom: "-10px",
                        left: "0px",
                        w: "100%",
                        h: "2px",
                        bg: "primary",
                      }
                    : null
                }
              >
                New entry
              </Text>
            </Link>

            <Link href="/all-contacts" passHref>
              <Text
                position="relative"
                as="a"
                textStyle={
                  router.pathname === "/all-contacts"
                    ? "regularText"
                    : "bold_underlined"
                }
                _after={
                  router.pathname === "/all-contacts"
                    ? {
                        content: "''",
                        position: "absolute",
                        bottom: "-10px",
                        left: "0px",
                        w: "100%",
                        h: "2px",
                        bg: "primary",
                      }
                    : null
                }
              >
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
