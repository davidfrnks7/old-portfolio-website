import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppTheme from "../theme/AppTheme";
import Head from "next/head";
import "../styles/background.css";
import "../styles/scrollbar.css";

function DavidPortfolioWebsite({
  Component,
  pageProps
}: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={AppTheme}>
      <Head>
        <title>{"David's Portfolio Website"}</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default DavidPortfolioWebsite;
