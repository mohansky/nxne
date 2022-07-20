import Image from "next/image";
import { imgblurDataURL } from "../../lib/constants";

export default function TourCoverImage({ title, src, subtitle, days }) {

  const image = (
    <Image
      src={src}
      alt={title}
      placeholder="blur"
      blurDataURL={ imgblurDataURL }
      layout="fill"
      objectFit="cover"
      priority
    />
  );
  return (
    <div className="tour-cover-image">
      <div className="tour-overlay"></div>
        {image}
        <div className="tour-content page">
        <h1 className="fw-bold text-uppercase">{title}</h1>
        <h2 className="text-capitalize">{subtitle}</h2>
        <h4 className="text-capitalize">{days}</h4>
      </div>
    </div>
  );
}
