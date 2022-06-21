import { Container, Col, Nav } from "react-bootstrap";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Sociallinks from "../data/social.json";

export default function Alert() {
  return (
    <div className="alert bg-dark d-none d-md-flex justify-content-end text-light rounded-0 mb-0 py-0 pe-1">
      <Nav className="mx-5">
        <ul className="list-inline text-center text-md-right my-1">
          <li className="list-inline-item mx-1 my-0">
            <a className="text-white" href="mailto:info.northbynortheast@gmail.com"> info.northbynortheast@gmail.com </a>
          </li>
          <li className="list-inline-item ms-2 me-1 my-0">  
            <a className="text-white" href="tel:+919940416065">
              +91 994 041 6065 
            </a>  
          </li>
          <li className="list-inline-item mx-1 my-0">
            <a className="text-white" href="tel:+918486183666">
              +91 848 618 3666
            </a>
          </li>
          {Sociallinks.social.map((item, index) => (
            <li className="list-inline-item mx-1 my-0" key={index}>
              <a href={item.link} className="icon m-1" target="_blank">
                <Icon className="mb-1" icon={item.icons} />
              </a>
            </li>
          ))}
        </ul>
      </Nav>
    </div>
  );
}
