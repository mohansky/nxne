import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import Testimonialdata from "../data/testimonials.json";
import { Icon } from '@iconify/react';

export default function Testimonials() {
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
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center"> 
              <h2 className="section-title section-title-border">
                Clientspeak
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 pr-0 align-self-center">
              <Image
                className="img-fluid 100"
                src="/images/Clientspeak.jpg"
                placeholder="blur"
                blurDataURL={ imgblurDataURL }
                alt="clients-image"
                width={490}
                height={710}
                layout="intrinsic"
              />
            </div>
            <div className="col-lg-6 col-md-6 align-self-center pl-0">
              <div className="testimonial-slider p-3">
                <Slider {...settings}>
                  {Testimonialdata.testimonials.map((item, index) => (
                    <div key={index}>
                      <i className="testimonial-icon">
                        <Icon className="mb-2" icon="icomoon-free:quotes-left" width="50" height="50" />
                      </i>
                      <p className="text-dark">{item.text}</p>
                      <h4 className="font-weight-normal">{item.name}</h4>
                      <h6 className="font-secondary text-color">{item.tour}</h6>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
