import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer";
export default function Document() {
  return (
    <Html lang="en">
      <Header/>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  );
}
