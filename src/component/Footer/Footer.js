import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo1 from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Logo and About Section */}
          <Col md={4} className="mb-3 text-center text-md-start">
            <h4>Kingcompiler</h4>
            <p style={{ color: "white", fontStyle: "italic" }}>
              School of Imagination!
            </p>
            <img
              src={logo1}
              alt="Kingcompiler Logo"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
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
              <li>
                <a href="#faq" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-light text-decoration-none">
                  Privacy Policy & Refund Policy
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info and Social Media */}
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <div className="d-flex align-items-center mb-2">
              <FaEnvelope className="me-2" />
              <p style={{ color: "white" }} className="mb-0">
                support@creatonation.com
              </p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaPhoneAlt className="me-2" />
              <p style={{ color: "white" }} className="mb-0">
                +1 (469) 866-3362
              </p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaPhoneAlt className="me-2" />
              <p style={{ color: "white" }} className="mb-0">
                +91 90381 62791
              </p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="me-2" />
              <p style={{ color: "white" }} className="mb-0">
                6121 Denton Dr, suite 101, Dallas, TX 75235, USA
              </p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="me-2" />
              <p style={{ color: "white" }} className="mb-0">
                Kalikapur, Garia, Kolkata, West Bengal, India
              </p>
            </div>

            <div className="mt-3">
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

        <p style={{ color: "white" }} className="text-center mb-0">
          &copy; {new Date().getFullYear()} Kingcompiler. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
