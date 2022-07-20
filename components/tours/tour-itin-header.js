import TourCoverImage from "./tour-itin-cover-image";

export default function TourHeader({ title, subtitle, days, image }) {
  return (
    <>
      <div className="m-0">
        <TourCoverImage title={title} subtitle={subtitle} days={days} src={image} height={620} width={1240} />
      </div>
    </>
  );
}
