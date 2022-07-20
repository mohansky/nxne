import React from 'react'

export default function TouroversList({overs}) {
  return (
    <>
        <ul className="pl-0 mb-10">
            {overs.map((item, index) => (
              <li className="pt-2 border-bottom-not-last" key={index}>
                <p className="mt-0">
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