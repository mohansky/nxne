import React from "react";
import Head from "next/head";
import { CMS_NAME, imgblurDataURL } from "../../lib/constants";
import Image from "next/image";
import Aboutusdata from "../../data/aboutus.json";
import { Icon } from "@iconify/react";

export default function Aboutus() {
  return (
    <>
      <Head>
        <title>About Us | {CMS_NAME}</title>
        {/* <meta property="og:image" content={tour.ogImage.url} /> */}
      </Head>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 order-2 order-lg-1"> 
              <h2 className="section-title section-title-border-half">{Aboutusdata.abouttitle}</h2>
               <p className="text-justify">{Aboutusdata.abouttext}</p>
            </div>
            <div className="col-lg-5 align-self-center order-1 order-lg-2 mb-md-50">
              <Image
                className="img-fluid w-100"
                src={Aboutusdata.aboutimg}
                placeholder="blur"
                blurDataURL={imgblurDataURL} 
                alt={Aboutusdata.abouttext}
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row rounded bg-dark">
            <div className="col-lg-5 rounded-left ceo-image px-0">
              <Image
                src={Aboutusdata.visionimg}
                placeholder="blur"
                blurDataURL={imgblurDataURL} 
                alt={Aboutusdata.visiontitle}
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="col-lg-7">
              <div className="p-5">
                <h2 className="section-title section-title-border-half-white text-white">{Aboutusdata.visiontitle}</h2>
                <p className="text-white text-justify">{Aboutusdata.visiontext}</p> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="section-title-sm">Our Responsibility Quotient</h5>
              <h2 className="section-title section-title-border-half">
                Why Us ?
              </h2>
            </div>
            <div className="row">
              {Aboutusdata.responsibility.map((item, index) => (
                <div className="col-md-6 col-lg-3 card border-0" key={index}>
                  <Icon
                    className="mx-auto"
                    icon={item.icon}
                    width="80"
                    height="80"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-12">
              <p className="text-dark text-justify">{Aboutusdata.responsibilitytext}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
