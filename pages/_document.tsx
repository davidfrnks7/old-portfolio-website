import Document, { Html, Main, NextScript, Head } from "next/document";
import Footer from "../theme/layout/Footer";
import React from "react";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="The new and improved Lucid Creations Media website."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Footer />
      </Html>
    );
  }
}

export default MyDocument;
