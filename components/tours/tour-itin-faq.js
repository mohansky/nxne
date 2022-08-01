import React from "react";

export default function TourFaq({ faq }) {
  return (
    <>
      <ul className="pl-0 my-3">
        {faq.map((item, index) => (
          <li className="py-3 border-bottom-not-last" key={index}>
            <h5 className="mb-0"> {item.title} </h5>
            <p className="mb-0"> {item.text} </p>
          </li>
        ))}
      </ul>
    </>
  );
}
