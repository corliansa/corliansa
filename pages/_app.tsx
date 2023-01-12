import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        defer
        data-domain="corliansa.xyz"
        src="https://plausible.dlx.pw/js/plausible.js"
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
