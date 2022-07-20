import { Nav } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Alertdata from "../data/alert.json";

export default function Alert() {
  return (
    <div className="alert bg-dark d-flex justify-content-end text-light rounded-0  py-2 px-2">
      <Nav className="mx-0">
        <ul className="list-inline text-center text-md-right my-1">
        {Alertdata.contact.map((item, index) => (
         <li className={item.class} key={index}>
            <a className="text-white" href={item.link} aria-label={item.name}>  {item.name}</a>
          </li>
          ))}
          {Alertdata.social.map((item, index) => (
            <li className="list-inline-item mx-2 my-1" key={index}>
              <a href={item.link} className="icon m-1" target="_blank" aria-label={item.name} >
                <Icon className="mb-1" icon={item.icons} width={20} height={20} aria-label={item.name}/>
              </a>
            </li>
          ))}
        </ul>
      </Nav>
    </div>
  );
}
