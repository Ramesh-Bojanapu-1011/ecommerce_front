import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/globe.svg" />
        </Head>
        <body>
            <Headder/>
          <Main />
          <NextScript />
          <Footer />

        </body>
      </Html>
    );
  }
}

export default MyDocument;
