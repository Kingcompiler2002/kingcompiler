import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Landingpage.css";
import { Carousel } from "react-bootstrap";
import banner from "./banner.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

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
            style={{ backgroundColor: "#FFC10E" }}
            className="btn  btn-lg"
          >
            <h3 style={{}}>Take a Free Trial Class!</h3>
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
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
