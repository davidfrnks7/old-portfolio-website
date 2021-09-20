import React, { ReactNode } from 'react';

import type { AppProps } from 'next/app'
import Header from "../layout/Header"
import { Box } from '@chakra-ui/layout';

interface Props {
  children: ReactNode;
  elementType?: string;
}

function Layout({ children }: Props, { pageProps }: AppProps): JSX.Element {
  return (
    <Box
      w="100%"
    >
      <Header {...pageProps} />
      <main>
        {children}
      </main>
    </Box >
  );
}
export default Layout;