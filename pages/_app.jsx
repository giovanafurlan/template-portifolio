import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Head from "next/head";
import Seo from '../components/seo.tsx';

const colors = {
  brand: {
    primary: '#5b1ab2',
    secondary: '#d91b67',
  },
}

const fonts = {
  fonts: {
    heading: 'Bungee Shade, cursive',
    body: 'Bungee Shade, cursive',
  },
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ colors, fonts, config, breakpoints })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <Seo
        title="Template"
        description=""
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;