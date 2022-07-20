import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import Testimonialdata from "../data/testimonials.json";
import { Icon } from "@iconify/react";

export default function Testimonials() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="prevArrow" onClick={onClick} aria-label="previous">
        <Icon icon="bi:arrow-left" width="30" height="30" />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="nextArrow" onClick={onClick} aria-label="next">
        <Icon icon="bi:arrow-right" width="30" height="30" />
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
      <section className="section pb-0">
        <div className="container">
          <div className="col-lg-12 text-center">
            <h2 className="section-title section-title-border">Clientspeak</h2>
          </div>
        </div>

        <div className="container">
          <div className="testimonial-slider shadow-sm">
            <i className="testimonial-icon ms-2">
              <Icon
                className="testimonial-icon mb-2"
                icon="icomoon-free:quotes-left"
                width="30"
                height="30"
              />
            </i>
            <Slider {...settings}>
              {Testimonialdata.testimonials.map((item, index) => (
                <div className="p-5" key={index}>
                  <Image
                    className="img-fluid testimonial-img"
                    src={item.img}
                    placeholder="blur"
                    blurDataURL={imgblurDataURL}
                    alt="clients-image"
                    width="200"
                    height="200"
                    layout="fixed"
                  />

                  <p className="text-dark mt-5">{item.text}</p>
                  <p className="fw-normal fs-4 fst-italic">{item.name}</p>
                  <p className="font-secondary text-color">{item.tour}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
