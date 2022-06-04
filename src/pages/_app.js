import { motion } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"

import theme from '../comps/Theme';
import Navbar from '../comps/Navigation/Navbar';

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

      <style jsx global>{`
					@font-face {
						font-family: 'Inter';
						src: url('/fonts/inter.woff2') format('woff2'), url('/fonts/inter.woff') format('woff'), url('/fonts/inter.ttf') format('truetype');
						font-weight: 400;
						font-style: normal;
						font-display: swap;
					}
					@font-face {
						font-family: 'Epilogue';
						src: url('/fonts/epilogue.woff2') format('woff2'), url('/fonts/epilogue.woff') format('woff'), url('/fonts/epilogue.ttf') format('truetype');
						font-weight: 400;
						font-style: normal;
						font-display: swap;
					}
				`}</style>

      <ChakraProvider theme={theme}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Navbar />

          <Component {...pageProps} />
        </motion.div>
      </ChakraProvider>
    </>
  )
}

export default MyApp
