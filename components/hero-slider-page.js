import React from "react";
import Image from "next/image";
import { imgblurDataURL } from "../lib/constants";
import { useRouter } from "next/router";

export default function HeroSliderPage() {
  const router = useRouter();
  const pagetitle = router.pathname.split("/").join(" ").split("-").join(" ");
  const imageFolder = "/images/page-hero";
  const imagePath = router.asPath;
  const imageFile = imagePath + ".jpg";
  const image = imageFolder + imageFile;

  return (
    <>
      <div className="hero-slider-item page py-160">
        {/* <div className="overlay page"></div> */}
        <Image
          src={image}
          alt="Cover Image"
          placeholder="blur"
          blurDataURL={ imgblurDataURL }
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="hero-content page">
          <h1 className="text-white text-center font-weight-bold text-uppercase mx-auto">
            {pagetitle}
          </h1>
        </div>
      </div>
    </>
  );
}
