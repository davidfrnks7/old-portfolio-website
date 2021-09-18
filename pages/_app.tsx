import type { AppProps } from "next/app";

import Head from "next/head";
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import AppTheme from "../theme/AppTheme";

function DavidPortfolioWebsite({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={AppTheme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo/favicon/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default DavidPortfolioWebsite;
