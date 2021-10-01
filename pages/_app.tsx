import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppTheme from "../theme/AppTheme";
import Layout from "../theme/layout/Layout";
import "../styles/background.css";
import Head from 'next/head'

function DavidPortfolioWebsite({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={AppTheme}>
      <Layout {...pageProps}>
        <Head>
          <title>David's Portfolio Website</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default DavidPortfolioWebsite;
