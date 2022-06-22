import Link from "next/link";
import Image from "next/image";
import { imgblurDataURL } from "../../lib/constants";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";

export default function TourCard({
  title,
  slug,
  subtitle,
  days,
  bg_image, 
  cat,
  touricon, 
}) {
  return (
    <>
      <div className="col-xl-6 col-lg-12">
        <div className="card mb-3 p-0 border-0 rounded-0 shadow-sm bg-gray">
          <div className="row g-0">
            <div className="col-md-7">
              <Image
                className="img-fluid tour-img"
                src={bg_image}
                layout="responsive"
                placeholder="blur"
                blurDataURL={ imgblurDataURL }
                width={240}
                height={160}
                sizes="30vw"
                alt={title}
              />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <Link href={`/tours/${slug}`}>
                  <a>
                    <h6 className="card-title tour-card mb-1 fw-bold">{title}</h6>
                    <p className="card-text tour-card mb-1">{subtitle}</p>
                    <div className="row">
                      <div className="col-2">
                        <h6 >
                          <Icon
                            className="my-1 p-1 bg-nne-secondary"
                            icon={touricon}
                            width="40"
                          />
                        </h6>
                      </div>
                      <div className="col-10">
                        <p className="card-text tour-card ms-2  mb-0">
                          <Icon className="me-2 mb-1" icon="bytesize:flag" />
                           {days}
                        </p>
                        <hr className="my-0 bg-nne-secondary" />
                        <p className="card-text tour-card ms-2 mb-0">
                          <Icon className="me-2 mb-1" icon="bi:speedometer2" />
                           {cat} 
                        </p>
                      </div> 
                    </div>
                  </a>
                </Link>
              </div>
              <div className="card-footer bg-transparent border-0 ">
                <Link href={`/tours/${slug}`}>
                  <a>
                    <Button className="my-auto" variant="btn btn-card ">
                      Tour Details
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
