import * as React from "react";
import Carousel from "framer-motion-carousel";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { Icon } from "@iconify/react";
import Slides from "../data/heroslider.json";
import { motion, AnimatePresence } from "framer-motion";



export default function HeroSliderFramer() {
  return (
    <Carousel interval={5000}  >
      {Slides.hero.slides.map((item, index, i) => (
        <div className="hero-slider-item py-160" key={index}>
          <div className="overlay"></div>
          <Image
            draggable="false"
            key={i}
            src={item.image}
            alt="Cover Image"
            layout="fill"
            placeholder="blur"
            blurDataURL={imgblurDataURL}
            objectFit="cover"
            objectPosition="center"
            priority
          />

          <motion.div
            className="hero-content"
            key={i}
            exit={{ opacity: 0 }}
            initial={{ y: 0, x: 0, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            transition={{ type: "spring", ease: "easeOut", duration: 1 }}
          >
            <h3 className="hero-title mb-1">{item.title}</h3>
            <h1 className="hero-subtitle mb-3">{item.subtitle}</h1>
            <p className="hero-text text-uppercase mb-5">{item.description}</p>
          </motion.div>
        </div>
      ))}
    </Carousel>
  );
}
