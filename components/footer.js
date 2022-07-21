import Footerdata from "../data/footer.json";
import Menuitems from "../data/menu.json";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { useRouter } from "next/router";
import { Icon } from '@iconify/react';
import MailingList from "./mailinglist";

export default function Footer() {
  const router = useRouter();
  const top = router.asPath;
  return (
    <footer className="mt-5">
      <div className="pt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="mb-5 text-md-left">
                <Image
                  className="img-fluid mt-1 mb-5"
                  src="/images/logo.svg"
                  layout='fixed'
                  placeholder="blur"
                  blurDataURL={imgblurDataURL}
                  alt="logo"
                  width="200"
                  height="136"
                />
                <p className="mt-3 text-white mb-5 pe-5">
                  {Footerdata.footer.content}
                </p> 
                <ul className="list-inline">
                  {Footerdata.footer.social.map((item, index) => (
                    <li className="list-inline-item" key={index}>
                      <a
                        href={item.link}
                        className="mx-2 text-white"
                        aria-label={item.name}
                        target="_blank"
                      >
                        <Icon icon={item.icons} width={30} height={30}  />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <h6 className="text-white mb-4">Important Links</h6>
              <ul className="footer-links">
                {Menuitems.menu.footer.map((item, index) => (
                  <li key={index}>
                    <a className="font-secondary text-white" href={item.URL}>  
                      <Icon className="mb-1" icon="bi:chevron-right" width={15} height={15} /> 
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-md-3">
              <h6 className="text-white mb-4">Quick Links</h6>
              <ul className="footer-links">
                {Menuitems.menu.mainmenu.map((item, index) => (
                  <li key={index}>
                    <a className="font-secondary text-white" href={item.URL}>  
                      <Icon className="mb-1" icon="bi:chevron-right" width={15} height={15} /> 
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 ">
              <h6 className="text-white mb-4">Join our mailing list</h6>
              <MailingList/>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-3 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5">
                <p className="text-white text-center text-md-start me-1">
                  {Footerdata.footer.copyright} |
                  <a
                    className="text-white text-center ms-1"
                    href={Footerdata.footer.email.link}
                  >
                    {Footerdata.footer.email.name}
                  </a>
                </p>
              </div>
              <div className="col-lg-6 col-md-7">
              </div>
            </div>
          </div>
          <button className="back-to-top" aria-label="back-to-top" onClick={() => router.push(top)}> 
            <Icon icon="bi:chevron-up" width={30} height={30} />
          </button>
        </div>
      </div>
    </footer>
  );
}
