import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./Navbar.css";
import logo from "./../../assets/logo.png";
import { courses } from "../../data/coursedata"; // Import your course data

function Navmenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top shadow-sm">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left Section (Logo & Courses Dropdown) */}
        <div className="d-flex align-items-center">
          <Navbar.Brand href="/" className="fw-bold">
            <img src={logo} alt="logo" width="120" height="70" />
          </Navbar.Brand>
          <NavDropdown title="Courses" id="courses-dropdown" className="ms-3">
            {courses.map((course) => (
              <NavDropdown.Item
                className="nav-dropdown-item"
                style={{ fontWeight: "bold" }}
                as={Link}
                to={`/course/${course.id}`}
                key={course.id}
              >
                {course.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </div>

        {/* Navbar toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Center and Right-Aligned Menu Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-center align-items-center gap-3">
            <Nav.Link href="#about">
              <h5 className="custom-nav-btn">About Us</h5>
            </Nav.Link>
            <Nav.Link href="#blog">
              <h5 className="custom-nav-btn">Blog</h5>
            </Nav.Link>
            <NavDropdown
              title={
                <span
                  className="dropdown-title custom-nav-btn"
                  style={{
                    fontSize: 17,
                    display: "inline",
                    margin: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "-10px",
                  }}
                >
                  Material
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#store">Store</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">
              <h5 className="custom-nav-btn">Contact Us</h5>
            </Nav.Link>
            <Nav.Link href="#privacy">
              <h5 className="custom-nav-btn">Privacy & Refund Policy</h5>
            </Nav.Link>

            {/* Buttons */}
            <Nav.Link href="#free-class">
              <button
                className="btn btn-sm rounded-pill px-3"
                style={{
                  backgroundColor: "#F6C61A",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <h5 className="mb-0">Take a Free Class!</h5>
              </button>
            </Nav.Link>
            <Nav.Link href="#login">
              <button
                className="btn  btn-sm rounded-pill px-3"
                style={{
                  backgroundColor: "#F6C61A",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <h5 className="mb-0 ">Login</h5>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navmenu;
