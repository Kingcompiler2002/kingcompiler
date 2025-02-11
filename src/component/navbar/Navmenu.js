import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./Navbar.css";

function Navmenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top shadow-sm">
      <Container>
        {/* Logo aligned to the left */}
        <Navbar.Brand href="#home" className="fw-bold">
          KingCompiler
        </Navbar.Brand>

        {/* Navbar toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu aligned to the right */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about">
              <h5 className="custom-nav-btn">About Us</h5>
            </Nav.Link>
            <Nav.Link href="#blog">
              <h5 className="custom-nav-btn">Blog</h5>
            </Nav.Link>
            <NavDropdown
              title={
                <span className="dropdown-title custom-nav-btn">Material</span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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

            {/* Styled button for "Take a Free Class!" */}
            <Nav.Link href="#free-class" className="ms-2">
              <button className="btn btn-danger btn-sm rounded-pill px-3">
                <h5 className="mb-0 text-white">Take a Free Class!</h5>
              </button>
            </Nav.Link>
            <Nav.Link href="#free-class" className="ms-2">
              <button className="btn btn-danger btn-sm rounded-pill px-3">
                <h5 className="mb-0 text-white">Login</h5>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navmenu;
