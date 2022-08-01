import React from 'react'

export default function TouroversList({overs}) {
  return (
    <>
        <ul className="pl-0 mb-10">
            {overs.map((item, index) => (
              <li className="py-1 border-bottom-not-last" key={index}>
                <p className="my-1">
                  <b className="text-muted">{item.l}</b>
                  <br />
                  {item.d}
                </p>
              </li>
            ))}
        </ul>
    </>
  )
} 