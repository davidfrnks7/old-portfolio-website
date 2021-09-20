import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { Box, ColorModeScript } from "@chakra-ui/react";
import AppTheme from "../theme/AppTheme";

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
        <body>
          <Box w="100vw" h="100vh">
            <ColorModeScript
              initialColorMode={AppTheme.config.initialColorMode}
            />
            <Main />
            <NextScript />
          </Box>
        </body>
      </Html>
    );
  }
}

export default Document;
