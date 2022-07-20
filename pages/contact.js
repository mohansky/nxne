import React, { useEffect } from "react";
import Contacts from "../components/contacts";
import ContactForm from "../components/contact-form"; 
import { CMS_NAME } from "../lib/constants";
import Head from "next/head"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const animation = useAnimation();
  const anime = useAnimation();

  useEffect(() => {
    console.log("use effect", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "tween",
          duration: 1,
          bounce: 0.3,
        },
      });
      anime.start({
        opacity: "1",
        transition: {
          type: "tween",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-5vw" });
      anime.start({ opacity: "0" });
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
              <Contacts/>
            </div>
            <motion.div className="col-lg-6" >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
