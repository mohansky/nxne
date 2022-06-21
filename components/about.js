import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import Aboutdata from "../data/about.json";

export default function About() {
  return (
    <>
      <section className="about section-sm overlay my-5">
        <Image
          className="section-bg"
          src={Aboutdata.about.img}
          layout="fill"
          placeholder="blur"
          blurDataURL={ imgblurDataURL }
          objectFit="cover"
          objectPosition="center"
        />
        <div className="container about-text ">
          <div className="row " >
            <div className="col-lg-7 offset-lg-4">
              <div className="rounded p-sm-3 px-2 py-4 bg-dark">
                <h3 className="section-title section-title-border-half text-white"> 
                  {Aboutdata.about.title}
                </h3>
                <p className="text-justify text-white mb-40">
                  {Aboutdata.about.text} 
                </p> 
                <Link href={Aboutdata.about.btnlink} >
                <a className="btn btn-primary mt-2">
                  {Aboutdata.about.btntext}
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
