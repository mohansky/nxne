import Link from "next/link";
import Image from "next/image";
import { imgblurDataURL } from "../../lib/constants";
import {Button} from 'react-bootstrap';
import { Icon } from "@iconify/react";
import { motion, useAnimation } from "framer-motion";
import CardSeparator from "./card-separator"

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
                    <p className="card-text tour-card tour-card-subtitle mb-2">{subtitle}</p>
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
                        <p className="card-text tour-card ms-2 mb-0">
                          <Icon className="me-2 mb-1" icon="bytesize:flag" />
                           {days}
                        </p>
                        <hr/>
                        {/* <CardSeparator/> */}
                        <p className="card-text tour-card ms-2 mb-0">
                          <Icon className="me-2 mb-1" icon="bi:speedometer2" />
                           {cat} 
                        </p>
                      </div> 
                    </div>
                  </a>
                </Link>
              </div>
              <motion.div className="card-footer bg-transparent border-0 " whileTap={{ scale: 0.9, opacity: 0.5 }}>
                <Link href={`/tours/${slug}`}>
                  <a>
                    <Button className="my-auto" variant="btn btn-card "> 
                        Tour Details  
                    </Button>
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div> 
    </>
  );
}
