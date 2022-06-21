import Document, { Html, Head, Main, NextScript } from 'next/document'
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
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/> 

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
    )
  }
}
