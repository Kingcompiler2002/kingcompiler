import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import "./Testimonials.css"; // Import custom styling

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "https://via.placeholder.com/100",
    review: "This service is amazing! Highly recommended.",
  },
  {
    id: 2,
    name: "John Doe",
    image: "https://via.placeholder.com/100",
    review: "A game-changer for our business. Loved it!",
  },
  {
    id: 3,
    name: "Sophia Brown",
    image: "https://via.placeholder.com/100",
    review: "Fantastic experience! Great customer support.",
  },
  {
    id: 4,
    name: "Michael Lee",
    image: "https://via.placeholder.com/100",
    review: "Highly professional and efficient. 5 stars!",
  },
  {
    id: 5,
    name: "Emma Wilson",
    image: "https://via.placeholder.com/100",
    review: "Absolutely wonderful! Will use again.",
  },
  {
    id: 6,
    name: "James Anderson",
    image: "https://via.placeholder.com/100",
    review: "The best service ever! Highly satisfied.",
  },
];

const chunkArray = (arr, size) => {
  return arr.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};

const Testimonials = () => {
  const groupedTestimonials = chunkArray(testimonials, 3); // Groups of 3

  return (
    <Container className="testimonials-section">
      <h2 className="text-center mb-4">Our Award Winning Students!</h2>
      <Carousel interval={1000} pause={false}>
        {groupedTestimonials.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map((testimonial) => (
                <Col md={4} key={testimonial.id} className="testimonial-col">
                  <Card className="testimonial-card">
                    <Card.Img
                      variant="top"
                      src={testimonial.image}
                      className="testimonial-img"
                    />
                    <Card.Body>
                      <Card.Title>{testimonial.name}</Card.Title>
                      <Card.Text>"{testimonial.review}"</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
