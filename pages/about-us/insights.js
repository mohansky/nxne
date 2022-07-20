import React from "react";
import Head from "next/head";
import { CMS_NAME, imgblurDataURL } from "../../lib/constants";
import Insightsdata from "../../data/insights.json";
import Image from "next/image";

export default function Insights() {
  return (
    <>
      <Head>
        <title> Insights | {CMS_NAME}</title>
        {/* <meta property="og:image" content={tour.ogImage.url} /> */}
      </Head>
      <section className="section">
        <div className="container">
          <div className="mb-5">
            <h2 className="section-title section-title-border-half">
              {Insightsdata.title}
            </h2>
            <p>{Insightsdata.p1}</p>
            <p>{Insightsdata.p2}</p>
            <p>
              {Insightsdata.p3} &nbsp; {Insightsdata.quote}
              <strong>{Insightsdata.quotetext}</strong>
            </p>
          </div>

          <div className="row justify-content-center">
            {Insightsdata.insights.map((item, index) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                <div className="card text-center shadow-sm">
                  <h5 className="card-title py-3">{item.title}</h5>
                  <div className="card-img-wrapper">
                    <Image
                      className="card-img-top rounded-0"
                      src={item.image}
                      placeholder="blur"
                      blurDataURL={imgblurDataURL}
                      alt="service-image"
                      layout="responsive"
                      width="240"
                      height="160"
                    />
                  </div>
                  <div className="card-body p-0 insights-body">
                    <p className="card-text insights-text mx-2 mb-0 py-3 px-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
