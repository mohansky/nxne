import Document, { Html, Head, Main, NextScript } from "next/document";
import { CMS_NAME, HOME_OG_IMAGE_URL, EXAMPLE_PATH } from "../lib/constants";
// import Script from "next/script"
// import { GTM_ID } from "../lib/gtm";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
            }}
          /> */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
         
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
            crossOrigin="true"
          />
          {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&display=swap" rel="stylesheet">  */}
          <link rel="shortcut icon" href="/images/logo.png" />


          {/* General Meta */}
          <meta name="description" content={`North by Northeast Journeys, specializes in the little-known Northeast region of India, offering adventure, nature and culture tours across Assam, Arunachal Pradesh, Meghalaya, Nagaland and Sikkim. | ${CMS_NAME}.`}/>
          <meta property="og:url" content={EXAMPLE_PATH} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={CMS_NAME}/>
          <meta
            property="og:description"
            content={`North by Northeast Journeys, specializes in the little-known Northeast region of India, offering adventure, nature and culture tours across Assam, Arunachal Pradesh, Meghalaya, Nagaland and Sikkim. | ${CMS_NAME}.`}
          />
          <meta property="og:image:height" content="205"/>
          <meta property="og:image:width" content="300"/>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta name="keywords" content="Northeast India, Assam, Arunachal Pradesh, Meghalaya, Nagaland, Sikkim, Active Holidays, Leisure Holidays, Family Holidays, Cycling, Trekking, Rafting, Culture Holidays"/>

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content="North by Northeast Journeys"/>
          <meta name="twitter:site" content={EXAMPLE_PATH} />
          <meta name="twitter:creator" content="@mogsishere" />
        </Head>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript> */}
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
