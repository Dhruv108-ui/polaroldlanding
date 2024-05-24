import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer";
export default function Document() {
  return (
    <Html lang="en">
      <Header/>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  );
}
