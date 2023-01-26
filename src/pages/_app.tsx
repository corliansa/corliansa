import { type AppType } from "next/app";
import Script from "next/script";
import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        defer
        data-domain="corliansa.xyz"
        src="https://plausible.dlx.pw/js/script.outbound-links.file-downloads.tagged-events.js"
      />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
