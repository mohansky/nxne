import React from "react";
import { Icon } from "@iconify/react";

export default function TourOverview({ overview }) {
  return (
    <>
      <ul className="ps-0 m-1">
        {overview.map((item, index) => (
          <li className="py-2 border-bottom-not-last" key={index}>
            <p className="d-inline-block font-primary m-0">
              <Icon className="me-2 mb-1" icon={item.icon} />
              {item.label}
            </p>
            <span className="fw-bold text-dark float-end">
            <p> {item.data} </p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
