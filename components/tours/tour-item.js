import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TourCard from "./tour-card";

export default function TourItem({ tours }) {
  //   const { ref, inView, entry } = useInView({threshold: 0.1});
  //   const controls = useAnimation();

  // useEffect(() => {
  // if(inView){
  //   controls.start({
  //     x: 0,
  //     transition: {
  //       type: 'spring',
  //       duration: 2,
  //       transition: { delay: i * 0.5 },
  //     }
  //   });
  // }
  //   if(!inView){
  //     controls.start({x: '10vw'})
  //   }
  // }, [inView]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {opacity: 0.1 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="row ps-0"
      >
        {tours.map((tour, index) => (
          <motion.li
            key={index}
            variants={item}
            className="col-xl-6 col-lg-12 item"
          >
            <TourCard
              key={tour.slug}
              slug={tour.slug}
              title={tour.title}
              subtitle={tour.subtitle}
              days={tour.days}
              bg_image={tour.bg_image}
              image={tour.image}
              category={tour.category}
              cat={tour.cat}
              tags={tour.tags}
              weight={tour.weight}
              touricon={tour.touricon}
              type={tour.type}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
