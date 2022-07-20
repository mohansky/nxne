import React, { useEffect } from "react";
import Link from 'next/link'
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import Aboutdata from "../data/about.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView, entry } = useInView({threshold: .3});
  const animation = useAnimation();

  useEffect(()=>{
    console.log("use effect", inView, entry );
    if(inView){
      animation.start({
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 2, 
        }
      });
    }
      if(!inView){
        animation.start({opacity: 0})
      }
  }, [inView]);
  return (
    <>
      <section className="about section-sm overlay my-5">
        <Image
          className="section-bg"
          src={Aboutdata.about.img}
          alt="Northeast India Man on stilts"
          layout="fill"
          placeholder="blur"
          blurDataURL={ imgblurDataURL }
          objectFit="cover"
          objectPosition="center"
        />
        <div className="container about-text ">
          <div className="row " >
            <div ref={ref} className="col-lg-7 offset-lg-4">
              <motion.div animate={animation} className="rounded p-sm-3 px-2 py-4 bg-dark">
                <h3 className="section-title section-title-border-half text-white"> 
                  {Aboutdata.about.title}
                </h3>
                <p className="text-justify text-white mb-40">
                  {Aboutdata.about.text} 
                </p>
                <motion.div className="text-center mt-5" whileTap={{scale: 0.9}}>
                <Link href={Aboutdata.about.btnlink} >
                <a className="btn btn-primary mt-2">
                  {Aboutdata.about.btntext}
                </a>
                </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
