import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL, EXAMPLE_PATH } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="/images/logo.png" />
      <meta name="theme-color" content="#000" />

      {/* General Meta */}
      <meta property="og:url" content={`${EXAMPLE_PATH}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${CMS_NAME}`} />
      <meta
        property="og:description"
        content={`North by Northeast Journeys, specializes in the little-known Northeast region of India, offering adventure, nature and culture tours across Assam, Arunachal Pradesh, Meghalaya, Nagaland and Sikkim. | ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      {/* Twitter Card */}
      <meta
        name="twitter:card"
        content={`North by Northeast Journeys, specializes in the little-known Northeast region of India, offering adventure, nature and culture tours across Assam, Arunachal Pradesh, Meghalaya, Nagaland and Sikkim. | ${CMS_NAME}.`}
      />
      <meta name="twitter:site" content={`${EXAMPLE_PATH}`} />
      <meta name="twitter:creator" content="@mogsishere" />
    </Head>
  );
}
