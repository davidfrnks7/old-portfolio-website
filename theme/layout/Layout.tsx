import React, { ReactNode } from "react";

import type { AppProps } from "next/app";
import Header from "../layout/Header";
import { Box } from "@chakra-ui/layout";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
  elementType?: string;
}

function Layout({ children }: Props, { pageProps }: AppProps): JSX.Element {
  return (
    <Box w="100%">
      <Header {...pageProps} />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
export default Layout;
