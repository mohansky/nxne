// import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME, imgblurDataURL, EXAMPLE_PATH,  HOME_OG_IMAGE_URL } from "../lib/constants";
import About from "../components/about";
import MissionAccordion from "../components/mission-accordion";
import CTA from "../components/cta";
import Testimonials from "../components/testimonials";
import TourTypes from "../components/tour-types";
import GallTest from "../components/galltest";

export default function Index( ) {
   
  return (
    <>
      <Head>
        <title> {CMS_NAME} | Holidays in Northeast India</title>
      </Head> 
      <TourTypes />
      <About />
      <MissionAccordion />
      <CTA />
      <Testimonials />
      {/* <GallTest/> */}
    </>
  );
} 