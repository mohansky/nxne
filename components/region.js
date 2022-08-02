import React from "react";
import Regiondata from "../data/regionaccordian.json";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";

export default function Region() {
  return (
    <>
      <div className="container">
        <h2 className="section-title section-title-border-half">
          The region at a glance
        </h2>
        <ul className="region-card-list ms-0">
          {Regiondata.accordion.map((item, index) => (
            <li className="row region-card text-color p-0 my-5" key={index}> 
                <div className="col-md-7 region-text">
                  <h5 className=" text-color mb-2 py-0 px-0">
                    {item.title}
                  </h5>
                  <p className="font-secondary text-color text-justify">{item.text}</p>
                </div>
                <div className="col-md-5 region-img">
                  <Image
                    src={item.image}
                    placeholder="blur"
                    blurDataURL={imgblurDataURL}
                    alt={item.title}
                    layout="intrinsic"
                    width="480"
                    height="480"
                    sizes="40vw"
                    className="img-fluid"
                  />
                </div> 
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
