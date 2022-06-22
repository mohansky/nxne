import React from "react";
import Accordian from "./accordian";
import Image from 'next/image'
import { imgblurDataURL } from "../lib/constants";

export default function MissionAccordion() {
  return (
    <> 
      <section className="mission section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"> 
              <h2 className="section-title section-title-border-half">
                The region at a glance
              </h2>
            </div>
            <div className="col-lg-6">
              <Accordian />
            </div>

            <div className="col-lg-6 align-self-end">
              <Image
                src="/images/map-of-northeast-india.jpg"
                placeholder="blur"
                blurDataURL={ imgblurDataURL }
                alt="chart" 
                layout="intrinsic"
                width="600"
                height="680"
                className="img-fluid h-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
