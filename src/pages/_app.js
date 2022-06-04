import { motion } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Wemanity - Test
        </title>

        <meta charSet='utf-8' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ChakraProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </ChakraProvider>
    </>
  )
}

export default MyApp
