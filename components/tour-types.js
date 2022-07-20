import React, { useEffect } from "react";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import Link from "next/link";
import Tourtypedata from "../data/tourtypes.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function TourTypes( ) {
  const { ref, inView, entry } = useInView({threshold: 0.1});
  const animation = useAnimation();

  useEffect(()=>{
    if(inView){
      animation.start({
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2,  
        }
      });
    }
      if(!inView){
        animation.start({opacity: 0}) 
      }
  }, [inView]);

  return (
    <>
      <section className="section">
        <div  className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h2 className="section-title section-title-border">
                {Tourtypedata.tourtypetitle}
              </h2>
            </div> 
            <div className="row" ref={ref}>
              {Tourtypedata.tourtype.map((item, index) => (
                <div  className="col-lg-4 col-sm-6 mb-4" key={index}>
                  <motion.div  animate={animation} 
                    className="card border-1 shadow-sm text-center"
                    >
                    <h5 className="card-title py-3">{item.title}</h5>
                    <div className="card-img-wrapper">
                      <Image
                        className="card-img-top img-fluid"
                        src={item.img}
                        alt={item.title}
                        placeholder="blur"
                        blurDataURL={ imgblurDataURL }
                        width={240}
                        height={170}
                        layout="responsive"
                        sizes="30vw"
                      />
                    </div>
                    <div className="card-body p-0">
                      <p className="text-justify card-text mx-2 mb-0 py-3 px-1">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            <motion.div className="text-center mt-5" whileTap={{scale: 0.9}}>
              <Link href={Tourtypedata.btnlink}>
                <a className="btn btn-primary mt-2">{Tourtypedata.btntext}</a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
