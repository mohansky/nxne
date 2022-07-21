import React, { useState, useEffect } from "react";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import Slides from "../data/heroslider.json"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function HeroSliderMain() {
  const { ref, inView, entry } = useInView();
  const [currentSlide, setcurrentSlide] = useState();
  const animation = useAnimation();

  useEffect(()=>{
    console.log(currentSlide);
    if(currentSlide){
      animation.start({ 
        x: "0",
        transition: {
          type: 'tween',
          duration: 1.5, 
        }
      });
    }
      if(!currentSlide){
        animation.start({x: "-2vw",})
      }
  }, [currentSlide]);


  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <motion.button
        className="nextArrow"
        initial={{ y: -30 }}
        whileTap={{ scale: 0.75, opacity: 0.5 }}
        onClick={onClick}
        aria-label="next"
      > 
        <Icon icon="bi:arrow-right" width="30" height="30" />
      </motion.button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <motion.button
        className="prevArrow"
        initial={{ y: -30 }}
        whileTap={{ scale: 0.75, opacity: 0.5 }}
        onClick={onClick}
        aria-label="previous"
      >
        <Icon icon="bi:arrow-left" width="30" height="30"/>
      </motion.button>
    );
  }
  var settings = {
    infinite: true,
    fade: true,
    dots: false,
    arrows: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // const [selectedSlide, setSelectedSlide] = useState(index);
  return (
    <>
      <div className="hero-slider position-relative"> 
          <Slider {...settings} ref={setcurrentSlide}>
            {Slides.hero.slides.map((item, index) => (
              <div  className="hero-slider-item py-160" key={index}>
                {/* <div className="overlay"></div> */}
                <Image
                  src={item.image}
                  alt="North by Northeast Journeys"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={imgblurDataURL}
                  objectFit="cover"
                  objectPosition="center"
                  priority
                />

                <div
                  className="hero-content" 
                >
                  <motion.h3 animate={animation} className="hero-title mb-1">{item.title}</motion.h3>
                  <motion.h1 className="hero-subtitle mb-3">{item.subtitle}</motion.h1>
                  <motion.p className="hero-text text-uppercase mb-5">
                    {item.description}
                  </motion.p>
                </div>
              </div>
            ))}
          </Slider> 
      </div>
    </>
  );
}
