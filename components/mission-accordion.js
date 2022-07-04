import React, { useEffect } from "react";
import Accordian from "./accordian";
import Image from 'next/image'
import { imgblurDataURL } from "../lib/constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function MissionAccordion() {
  const { ref, inView, entry } = useInView({threshold: 0.4});
  const animation = useAnimation();
  const anime = useAnimation(); 

  useEffect(()=>{ 
    if(inView){
      animation.start({
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2, 
          bounce: 0.1
        }
      });
      anime.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2, 
          bounce: 0.1
        }
      });
    }
      if(!inView){
        animation.start({opacity: 0.1})
        anime.start({x: '-5vw'})
      }
  }, [inView]);
  return (
    <> 
      <section className="mission section">
        <div className="container">
          <div ref={ref} className="row">
            <div  className="col-lg-12"> 
              <h2 className="section-title section-title-border-half">
                The region at a glance
              </h2>
            </div>
            <motion.div animate={anime} className="col-lg-6">
              <Accordian />
            </motion.div>

            <motion.div animate={animation} className="col-lg-6 align-self-end">
              <Image
                src="/images/map-of-northeast-india.jpg"
                placeholder="blur"
                blurDataURL={ imgblurDataURL }
                alt="chart" 
                layout="responsive"
                width="600"
                height="680"
                sizes="50vw"
                className="img-fluid"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
