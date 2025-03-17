import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./FreeTrial.css"; // Import custom styles
import group from "../../assets/group.png";
import one from "../../assets/one.png";
import groupgif from "../../assets/group.gif";

const FreeTrial = () => {
  return (
    <div className="free-trial-bg">
      <Container className="free-trial-section">
        {/* Section Heading */}
        <h1 className="text-center section-heading">Our Offerings</h1>

        <Row>
          {/* First Column - Free Trial Button & List */}
          <Col md={4} className="free-trial-left">
            <Button style={{ marginBottom: 80 }} className="trial-btn">
              Book a Free Trial
            </Button>
            <ul className="requirements-list">
              <li>📱 A DEVICE: Laptop | Desktop | Tablet | Smartphone</li>
              <li>🌍 Good internet connection</li>
              <li>📚 Willingness to learn & play</li>
            </ul>
          </Col>

          {/* Second Column - Image + HR + Description */}
          <Col md={4} className="free-trial-column">
            <img src={groupgif} alt="Group Class" className="trial-image" />
            <h4>Group Class</h4>
            <hr />
            <p>
              Learn chess in a small, interactive group of kids. Course
              structures devised to impart maximum knowledge, offer flexibility
              in learning chess at a steady pace.
            </p>
            <p>Age Group: 5 to 15 Years</p>
          </Col>

          {/* Third Column - Image + HR + Description */}
          <Col md={4} className="free-trial-column">
            <img src={one} alt="Live Interaction" className="trial-image" />
            <h4>One to One</h4>
            <hr />
            <p>
              Pace and pattern of teaching will be as per your child’s
              understanding and grasping power. Personalized training plan and
              undivided attention of the coach.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FreeTrial;
