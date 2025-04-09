import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Landingpage.css";
import { Carousel } from "react-bootstrap";
import banner from "./banner.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const LandingPage = () => {
  return (
    <div className="container">
      <div
        className="row align-items-center landing-page "
        style={{ minHeight: "70vh", marginTop: "20px" }}
      >
        {/* Left Side: Title and Button */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-2 fw-bold">
            #1 Live Online Extra- Curricular Courses
          </h1>
          <p className="lead">
            <h4 style={{ fontStyle: "italic", color: "#909090" }}>
              Member of the United States Chess Federation
              <br />
              <span style={{ fontStyle: "italic", color: "#909090" }}>
                All Fide Certified Coaches
              </span>
            </h4>
          </p>
          <button
            style={{ backgroundColor: "#FFC10E", textAlign: "center" }}
            className="btn  btn-lg"
          >
            <h3 style={{}}>BOOK A FREE DEMO</h3>
          </button>{" "}
          <br />
          <button
            style={{
              backgroundColor: "#786349",
              marginTop: "10px",
              color: "white",
              textAlign: "center",
            }}
            className="btn  btn-sm"
            onClick={() => {
              const section = document.getElementById("courses-section");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <h3>
              Courses <MdKeyboardDoubleArrowDown />
            </h3>
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6 text-center">
          {/* Carousel Slider */}
          <Carousel
            className="carousel-container"
            interval={2000}
            pause={false}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/0QBMRHwy/img1.png"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img4} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
