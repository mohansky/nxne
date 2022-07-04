import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function CTA() {
  const { ref, inView, entry } = useInView({threshold: 0.2});
  const animation = useAnimation();

  useEffect(()=>{
    console.log("use effect", inView, entry );
    if(inView){
      animation.start({
        y: 0,
        transition: {
          type: 'spring',
          duration: 2, 
          bounce: 0.1
        }
      });
    }
      if(!inView){
        animation.start({y: '5vh'})
      }
  }, [inView]);
  return (
    <>
      <section className="cta section-sm overlay my-auto  d-flex justify-content-end align-content-center">
        <Image
          className=" "
          src="/images/ferry-crossing.jpg"
          alt="Northeast India ferry crossing"
          layout="fill"
          placeholder="blur"
          blurDataURL={ imgblurDataURL }
          objectFit="cover"
          objectPosition="center"
        />
        <div ref={ref} className="container d-flex justify-content-end align-self-center" >
          <Link href="/contact">
            <motion.button animate={animation} className="btn btn-light text-uppercase cta-btn" whileTap={{scale: 0.9}}>
              get in touch
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
}
