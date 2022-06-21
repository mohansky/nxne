export default function TourBody({ content }) {
  return (
    <>
      <div className="tour-body" dangerouslySetInnerHTML={{ __html: content }}/>
    </>
  )
}
