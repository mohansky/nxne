import React from "react";
import Head from "next/head";
import { CMS_NAME, imgblurDataURL } from "../../lib/constants";
import Image from "next/image";
import Teamdata from "../../data/team.json";
import { Icon } from "@iconify/react";

export default function Team() {
  return (
    <>
      <Head>
        <title>Team | {CMS_NAME}</title>
        {/* <meta property="og:image" content={tour.ogImage.url} /> */}
      </Head>
      <section className="section">
        <div className="container"> 
            <h2 className="section-title section-title-border-half">
              {Teamdata.title}
            </h2>
            <p className="text-justify">{Teamdata.text}</p>
          
          <div className="row">
            {Teamdata.teammembers
              .sort((a, b) => (a.weight > b.weight ? 1 : -1))
              .map((item, index) => (
                <div className="col-lg-3 col-sm-6 mb-4" key={index}>
                  <div className="card text-center shadow-sm">
                    <Image
                      className="card-img-top"
                      src={item.image}
                      placeholder="blur"
                      blurDataURL={imgblurDataURL} 
                      width={340}
                      height={290}
                      layout="responsive"
                      alt="team-member"
                    />
                    <div className="card-body card-body-2 pb-0 px-4">
                      <h5 className="card-title text-color d-block">
                        {item.title}
                      </h5>
                      <div className="py-2 px-0 pb-3">
                        <span className="fw-bold float-right">
                          {item.information.map((item, index) => (
                            <div className="py-3 my-2" key={index}>
                              <p className="d-inline-block float-start m-0">
                                <Icon className="me-2 mb-1" icon={item.icon} />
                                {item.label}
                              </p>
                              <span className="fw-bold float-end">
                                {item.data}
                              </span>
                            </div>
                          ))}
                        </span>
                      </div>
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
