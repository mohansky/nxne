import { EXAMPLE_PATH } from "../lib/constants";
import Footerdata from "../data/footer.json";
import Menuitems from "../data/menu.json";
import Sociallinks from "../data/social.json";
import Link from "next/link";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import { Icon } from '@iconify/react';
import Contactdata from "../data/contact.json";

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
                  blurDataURL={ imgblurDataURL }
                  alt="logo"
                  width="200"
                  height="136"
                />
                <p className="mt-3 text-white mb-30">
                  {Footerdata.footer.content}
                </p>

                <ul className="list-inline">
                  {Sociallinks.social.map((item, index) => (
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
                    href={Contactdata.email.link}
                  >
                    {Contactdata.email.name}
                  </a>
                </p>
              </div>
              <div className="col-lg-6 col-md-7">
                {/* <Nav className="mx-5">
                  <ul className="list-inline text-center text-md-right">
                    {Menuitems.menu.footer.map((item, index) => (
                      <li
                        className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2"
                        key={index}
                      >
                        <Link href={item.URL}>
                          <a className="font-secondary text-white">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Nav> */}
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
