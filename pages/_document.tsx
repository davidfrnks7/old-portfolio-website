import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import AppTheme from "../theme/AppTheme";

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/images/favicon.svg" />
          <meta httpEquiv="content-language" content="en" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="portfolio software engineering coding developer seeking employment open for hire" />
          <meta name="copyright" content="David Franks" />
          <meta name="description" content="A website to list my skills and demonstrate them for potential employers and clients to see." />
          <meta name="page-topic" content="Skills and PRojects" />
          <meta name="page-type" content="Portfolio" />
          <meta name="audience" content="Everyone" />
          <meta name="robots" content="index, follow" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={AppTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
