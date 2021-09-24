import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import AppTheme from "../theme/AppTheme";

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
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
