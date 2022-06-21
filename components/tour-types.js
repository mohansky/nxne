import React from "react";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import Link from "next/link";
import Tourtypedata from "../data/tourtypes.json";

export default function TourTypes() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h2 className="section-title section-title-border">
                {Tourtypedata.tourtypetitle}
              </h2>
            </div> 
            <div className="row">
              {Tourtypedata.tourtype.map((item, index) => (
                <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                  <div className="card border-1 rounded-0 text-center">
                    <h5 className="card-title py-3">{item.title}</h5>
                    <div className="card-img-wrapper">
                      <Image
                        className="card-img-top rounded-0"
                        src={item.img}
                        alt={item.title}
                        placeholder="blur"
                        blurDataURL={ imgblurDataURL }
                        width={240}
                        height={160}
                        layout="responsive"
                      />
                    </div>
                    <div className="card-body p-0">
                      <p className="text-justify card-text mx-2 mb-0 py-3 px-1">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link href={Tourtypedata.btnlink}>
                <a className="btn btn-primary mt-2">{Tourtypedata.btntext}</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
