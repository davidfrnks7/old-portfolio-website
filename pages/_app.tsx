import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppTheme from "../theme/AppTheme";
import Layout from "../theme/layout/Layout";

function DavidPortfolioWebsite({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={AppTheme}>
      <Layout {...pageProps}>
          <Component {...pageProps} />
      </Layout>
  </ChakraProvider>
  );
}

export default DavidPortfolioWebsite;
