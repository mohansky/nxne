import React from "react";

export default function TouraccoList({ meals, accommodation, refreshments }) {
  return (
    <>
      <ul className="pl-0 mb-10">
        <li className="border-bottom-not-last">
          <p className="my-1">
            <b className="fw-bolder text-muted">Meals</b>
            <br />
            {meals}
          </p>
        </li>
        <li className="border-bottom-not-last">
          <p className="my-1">
            <b className="fw-bolder text-muted">Accommodation</b>
            <br />
            {accommodation}
          </p>
        </li>
        <li className="border-bottom-not-last">
          <p className="my-1">
            <b className="fw-bolder text-muted">Refreshments</b>
            <br />
            {refreshments}
          </p>
        </li>
      </ul>
    </>
  );
}
