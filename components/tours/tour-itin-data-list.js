import React from "react";

export default function TourdataList({ datalist }) {
  return (
    <>
      <ul className="pl-0 mb-10">
        {datalist.map((item, index) => (
          <li className="border-bottom-not-last liststyle" key={index}>
            <p className="mb-0 py-1">{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
