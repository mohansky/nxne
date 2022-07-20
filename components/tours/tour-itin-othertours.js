import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TourOthertours({ othertours }) {
  return (
    <>
      <ul className="row my-3 ps-0" >
                {othertours.map((item, index) => (
                  <li className="col-xl-3 col-lg-6 col-md-6 col-sm-12 g-2" key={index}> 
                      <div className="position-relative">
                        <Image
                          className="img-fluid w-100"
                          src={item.image}
                          layout="responsive"
                          width={240}
                          height={160}
                          alt={item.title}
                        />
                        <div className="tour-list-item">
                          <Link href={item.link}>
                            <a>
                              <h5 className="fw-bold">{item.title}</h5>
                            </a>
                          </Link>
                        </div>
                      </div> 
                  </li>
                ))}
              </ul>
    </>
  );
}
