import React, { useState } from "react";
import BookingForm from "../BookingForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Landingpage.css";
import { Carousel } from "react-bootstrap";
import banner from "./banner.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      <div className="row align-items-center landing-page ">
        {/* Left Side: Title and Button */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-2 fw-bold head-1">
            #1 Live Online Coding, Chess & Creative Courses for Kids & Teens
          </h1>
          <p className="lead">
            <h4>
              Learn from expert mentors in fun, interactive, and personalized
              classes that build real-world skills for the future.
              <br />
              <span
                style={{
                  color: "#124E79",
                  fontWeight: "bold",
                }}
              >
                All Fide Certified Coaches
              </span>
            </h4>
          </p>
          <button
            style={{ backgroundColor: "#FFD700", textAlign: "center" }}
            className="btn  btn-lg"
            onClick={() => setShowForm(true)}
          >
            <h3
              style={{
                fontWeight: "bolder",
                paddingTop: "2%",
                color: "#1A1A1A",
              }}
            >
              BOOK A FREE DEMO
            </h3>
          </button>{" "}
          <br />
          <button
            style={{
              backgroundColor: "#1A1A1A",
              marginTop: "10px",
              color: "#FFD700",
              textAlign: "center",
              paddingTop: "2%",
            }}
            className="btn  btn-sm btn-outline-warning"
            onClick={() => {
              const section = document.getElementById("courses-section");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <h3>
              Explore Courses <MdKeyboardDoubleArrowDown />
            </h3>
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6 text-center">
          {/* Carousel Slider */}
          <Carousel
            className="carousel-container"
            interval={3000}
            pause={false}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={banner} alt="First slide" />
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

      {/* Google Form Popup */}
      {showForm && (
        <BookingForm
          formUrl="https://forms.gle/AF7PwKJHWqWm94Sv5"
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default LandingPage;
