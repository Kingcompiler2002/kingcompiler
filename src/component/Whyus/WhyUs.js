import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./WhyUs.css"; // Import custom styling

const whyUsData = [
  {
    id: 1,
    title: "Expert Mentors",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title: "Champion Students",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "Flexible Learning",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    title: "Personalized Learning Plans",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    title: "24/7 Support",
    image: "Safe Environment for Students",
  },
];

const WhyUs = () => {
  return (
    <Container className="why-us-section">
      <h2 className="text-center mb-4">Why Choose Us?</h2>
      <Row className="justify-content-center">
        {whyUsData.map((item) => (
          <Col key={item.id} md={2} sm={6} xs={12} className="why-us-col">
            <Card className="why-us-card text-center">
              <Card.Img variant="top" src={item.image} className="why-us-img" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyUs;
