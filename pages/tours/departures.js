import { getAllTours } from "../../lib/api";
import { useEffect, useState } from "react";
import { CMS_NAME } from "../../lib/constants";
import { Container } from "react-bootstrap";
import Head from "next/head";
import { motion } from "framer-motion";
import TourItem from "../../components/tours/tour-item";

export default function Departures({ allTours }) {
 
  const departures = allTours.filter(
    (tour) => tour.category == "departures"
  );

  if (!departures || departures.length === 0) {
    return (
      <>
        <Head>
          <title> Departures | {CMS_NAME} </title> 
          <meta property="og:title" content={`Departures | ${CMS_NAME}`}/>
        </Head>
        <Container>
          <h4 className="text-center my-5"> No Fixed Departures planned at the moment watch this space.</h4>
        </Container>
   
      </>
    ); }

  return (
    <>
      <Head>
        <title> Departures | {CMS_NAME} </title> 
        <meta property="og:title" content={`Departures | ${CMS_NAME}`}/>
      </Head>
      <Container>
        <h4 className="text-center my-5"> Fixed Departures 2022 - 23</h4>
      </Container>
      <div className="container-xxl container-fluid mt-5">
        <TourItem tours={departures} />
      </div>
    </>
  ); 
}


export async function getStaticProps() {
  const allTours = getAllTours([
    'title',
    'slug',
    'subtitle',
    'days',
    'draft', 
    'bg_image',
    'image',
    'type',
    'category',
    'cat',
    'tags',
    'weight',
    'touricon',
    'type', 
  ]);

  return {
    props: { allTours },
  };
}
