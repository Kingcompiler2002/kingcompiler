import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Logo and About Section */}
          <Col md={4} className="mb-3">
            <h4 className="text-uppercase">Kingcompiler</h4>
            <p>Empowering young minds with coding and creativity.</p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#courses" className="text-light text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-light text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info and Social Media */}
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@creatonation.com</p>
            <p>Phone: +91 12345 67890</p>

            <div>
              <a href="https://facebook.com" className="text-light me-3 fs-5">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-light me-3 fs-5">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-light me-3 fs-5">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-light fs-5">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />

        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Creatonation. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
