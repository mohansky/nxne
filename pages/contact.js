import React, {useEffect} from "react";
import ContactForm from "../components/contact-form";
import Contactdata from "../data/contact.json";
import { CMS_NAME, imgblurDataURL, EXAMPLE_PATH,  HOME_OG_IMAGE_URL } from "../lib/constants";
import Head from "next/head";
import { Icon } from '@iconify/react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView  } = useInView({ 
    threshold: 0.1,
  });

  const animation = useAnimation();

  useEffect(()=>{
    console.log("use effect", inView );
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'tween',
          duration: 1,
          bounce: 0.3
        }
      });
    }
      if(!inView){
        animation.start({x: '-5vw'})
      }
  }, [inView]);

  return (
    <>
      <Head>
        <title>Contact | {CMS_NAME}</title>
      </Head>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-title">Contact Us</h2>

              <motion.ul ref={ref} animate={animation} className="ps-0">
                {Contactdata.contacts.phone.map((item, index) => (
                  <li className="d-flex mb-30" key={index}>
                    <div className="round-icon me-3">
                    <Icon className="mb-2" icon="ph:device-mobile" width="40" height="40"/>
                    </div>
                    <div className="align-self-center font-primary">
                      <div >
                        <a className="text-dark" href={item.link}> {item.name}</a>
                      </div>
                    </div>
                  </li>
                ))}

                <li className="d-flex mb-30">
                  <motion.div   className="round-icon me-3">
                  <Icon className="mb-2"  icon="ph:envelope" width="40" height="40"/>
                  </motion.div>
                  <div className="align-self-center font-primary">
                    <div> <a className="text-dark" href={Contactdata.email.link}>{Contactdata.email.name}</a></div>
                  </div>
                </li>
                <li className="d-flex mb-30">
                  <div className="round-icon me-3">
                  <Icon className="mb-2"  icon="ph:map-trifold" width="40" height="40"/>   
                  </div>
                  <div className="align-self-center font-primary">
                    <div className="text-dark"> {Contactdata.address.name}</div>
                  </div>
                </li>
              </motion.ul>
            </div>
            <div className="col-lg-6">
            <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
