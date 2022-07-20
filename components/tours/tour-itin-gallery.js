import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import { imgblurDataURL } from "../../lib/constants";

export default function TourGallery({ galleryimages, subtitle }) {
  const options = {
    settings: {
      overlayColor: "rgb(0, 0, 0, 0.8)",
    },
    buttons: {
      showDownloadButton: false,
    },
    caption: {
      captionColor: "#fff",
      captionTextTransform: "capitalize",
      captionFontSize: "1rem",
    },
    thumbnails: {
      showThumbnails: false,
    },
  };
  return (
    <>
      <SRLWrapper options={options}>
        <ul className="gallery row ps-0">
          {galleryimages.map((item, index) => {
            return (
              <li className="col-sm-1 col-md-2 col-md-3 p-0 m-0 " key={index}>
                <a key={index} href={item}>
                  <Image
                    className="img-fluid "
                    src={item}
                    placeholder="blur"
                    blurDataURL={imgblurDataURL}
                    alt={subtitle}
                    layout="responsive"
                    width="600"
                    height="400"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </SRLWrapper>
    </>
  );
}
