import React from "react";
import ContactForm from "../components/contact-form";
import Contactdata from "../data/contact.json";
import { CMS_NAME } from "../lib/constants";
import Head from "next/head";
import { Icon } from '@iconify/react';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | {CMS_NAME}</title>
        {/* <meta property="og:image" content={tour.ogImage.url} /> */}
      </Head>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-title">Contact Us</h2>

              <ul className="ps-0">
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
                  <div className="round-icon me-3">
                  <Icon className="mb-2"  icon="ph:envelope" width="40" height="40"/>
                  </div>
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
              </ul>
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
