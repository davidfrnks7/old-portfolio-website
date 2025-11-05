import React, { FC, ReactNode } from "react";
import type { AppProps } from "next/app";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
  elementType?: string;
  navTo: (refName: RefNames) => void;
  highlight: RefNames | undefined;
}

const Layout: FC<LayoutProps> = (
  { children, navTo, highlight }: LayoutProps,
  { pageProps }: AppProps
) => {
  return (
    <Box w="100%">
      <Header {...pageProps} navTo={navTo} highlight={highlight} />
      <main>{children}</main>
      <Footer navTo={navTo} />
    </Box>
  );
};
export default Layout;
