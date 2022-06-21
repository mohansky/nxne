import React, { useEffect } from "react";
import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { SSRProvider } from "@react-aria/ssr";
// import TagManager from "react-gtm-module";

export default function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: "GTM-xxx" });
  // }, []);

  return (
    <SSRProvider>
      <SimpleReactLightbox>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SimpleReactLightbox>
    </SSRProvider>
  );
}
