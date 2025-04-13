import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./WhyUs.css"; // Import custom styling

const whyUsData = [
  {
    id: 1,
    title: "Expert Instructors",
    image: "https://i.postimg.cc/4yWT0hxQ/why-1.png",
  },
  {
    id: 2,
    title: "Champion Students",
    image: "https://i.postimg.cc/3Jwhv9tS/why-2.png",
  },
  {
    id: 3,
    title: "Live and Interactive Classes",
    image: "https://i.postimg.cc/PrFjzZct/why-3.png",
  },
  {
    id: 4,
    title: "Personalized Curriculum",
    image: "https://i.postimg.cc/0yMqtjR7/why-4.png",
  },
  {
    id: 5,
    title: "Safe Environment for Students",
    image: "https://i.postimg.cc/t4KG8bpw/why-5.png",
  },
];

const WhyUs = () => {
  return (
    <Container className="why-us-section">
      <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
        Why Choose Us?
      </h2>
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
