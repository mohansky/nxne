import React from "react";

export default function TourVideo({ video }) {
  return (
    <>
      <div class="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
