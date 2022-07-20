import { Container } from "react-bootstrap";

export default function TourTitle({ children }) {
  return (
    <Container>
      <h1 className="mt-5 text-center">{children}</h1>
    </Container>
  );
}
