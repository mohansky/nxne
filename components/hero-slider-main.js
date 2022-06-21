import React from "react"; 
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { Icon } from '@iconify/react';
import Slider from "react-slick";
import Slides from "../data/heroslider.json";

export default function HeroSliderMain() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="prevArrow" onClick={onClick}>
        <Icon icon="bi:arrow-left" width="30" height="30"/>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="nextArrow" onClick={onClick}>
        <Icon icon="bi:arrow-right" width="30" height="30"/>
      </button>
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

  return (
    <>
      <div className="hero-slider position-relative">
        <Slider {...settings}>
          {Slides.hero.slides.map((item, index) => (
            <div className="hero-slider-item py-160" key={index}>
              <div className="overlay"></div>
              <Image
                src={item.image}
                alt="Cover Image"
                layout="fill"
                placeholder="blur"
                blurDataURL={ imgblurDataURL }
                objectFit="cover" 
                objectPosition= "center"
                priority
              />
              <div className="hero-content">
                <h3 className="hero-title mb-1">
                  {item.title}
                </h3>
                <h1 className="hero-subtitle mb-3">
                  {item.subtitle}
                </h1>
                <p className="hero-text mb-5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
