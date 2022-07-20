import React, { useEffect } from "react";
import Contactdata from "../data/contact.json"; 
import { Icon } from "@iconify/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contacts() {
    const { ref, inView } = useInView({
        threshold: 0.3,
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
              duration: 2,
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
    <div ref={ref}>
    <motion.h2 animate={anime} className="section-title">Contact Us</motion.h2>
      <motion.ul animate={animation} className="ps-0">
        {Contactdata.contact.map((item, index) => (
          <li className="d-flex mb-30" key={index}>
            <div className="round-icon me-3">
              <Icon
                className="mb-2"
                icon={item.icon}
                width="40"
                height="40"
              />
            </div>
            <div className="align-self-center font-primary">
              <div>
                <a className="text-dark" href={item.link}>
                  {item.name}
                </a>
              </div>
            </div>
          </li>
        ))}
      </motion.ul>
      </div>
    </>
  );
}
