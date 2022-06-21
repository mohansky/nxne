import TourCard from './tour-card'
import { Row } from 'react-bootstrap'

export default function TourItem({ tours }) {
  return (
    <section> 
        <Row>
          {tours.map((tour) => (
            <TourCard
              key={tour.slug}
              slug={tour.slug}
              title={tour.title}
              subtitle={tour.subtitle}
              days={tour.days} 
              bg_image={tour.bg_image}
              image={tour.image}
              category={tour.category}
              cat={tour.cat}
              tags={tour.tags}
              weight={tour.weight}
              touricon={tour.touricon}
              type={tour.type} 
              />
          ))}
        </Row>
       
    </section>
  )
}
