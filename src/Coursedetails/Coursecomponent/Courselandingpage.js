import React, { useEffect, useState } from "react";
import "./CourselandingPage.css";
import BookingForm from "../../component/BookingForm";

const CourselandingPage = ({ courses, courseId }) => {
  const [showForm, setShowForm] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [symbol, setSymbol] = useState("₹");

  const course = courses.find((c) => c.id === parseInt(courseId));

  useEffect(() => {
    // Fetch user's location and currency
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        const userCurrency = data.currency || "USD";
        setCurrency(userCurrency);

        // Fetch exchange rate
        fetch(`https://api.exchangerate-api.com/v4/latest/INR`)
          .then((response) => response.json())
          .then((data) => {
            const rate = data.rates[userCurrency] || data.rates["USD"];
            setExchangeRate(rate);

            // Set currency symbol
            const symbols = {
              USD: "$",
              EUR: "€",
              GBP: "£",
              INR: "₹",
              // Add more currency symbols as needed
            };
            setSymbol(symbols[userCurrency] || "$");
          });
      });
  }, []);

  if (!course) {
    return <div className="text-center mt-5">Course not found!</div>;
  }

  const originalPrice = 550;
  const demoPrice = 0;
  const convertedOriginalPrice = (originalPrice * exchangeRate).toFixed(2);
  const convertedDemoPrice = (demoPrice * exchangeRate).toFixed(2);

  return (
    <div
      style={{ paddingTop: "120px", minHeight: "65vh" }}
      className="container d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start page-content"
    >
      {/* Left Section */}
      <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
        <h1 style={{ fontWeight: "bold" }}>{course.title}</h1>
        <h6
          style={{
            color: "grey",
            fontSize: "17px",
            fontWeight: "bold",
            paddingTop: "2%",
            fontStyle: "italic",
          }}
        >
          {course.Designation}
        </h6>
        <p style={{ color: "grey", fontSize: "17px", fontWeight: "bold" }}>
          {course.desctitle}
        </p>

        <button
          className="btn btn-warning landing-btn"
          style={{
            fontWeight: "bold",
            fontSize: "30px", // Bigger font size
            padding: "12px 24px", // More padding
            borderRadius: "8px", // Rounded corners
          }}
          onClick={() => setShowForm(true)}
        >
          Book a Free Trial Class
        </button>
        <h6 className="desktop-info-text">
          <span className="crossed-price">
            {symbol} {convertedOriginalPrice}{" "}
          </span>
          <span style={{ color: "white" }}>. </span> {symbol}{" "}
          {convertedDemoPrice} for the Demo class 100% free
        </h6>
      </div>

      {/* Right Section */}
      <div className="col-12 col-md-6 d-flex justify-content-center">
        <img
          style={{
            width: "90%",
            maxWidth: "450px",
            borderRadius: "10px",
            height: "100%",
            maxHeight: "400px",
            objectFit: "cover",
          }}
          src={course.image}
          alt={course.title}
          className="img-fluid rounded shadow-lg"
        />
      </div>
      <div className="box-1">
        <button
          className="btn btn-danger fixed-mobile-btn"
          onClick={() => setShowForm(true)}
        >
          Book a Free Trial Class
        </button>
        <h6 className="mobile-info-text">
          <span className="crossed-price">
            {symbol} {convertedOriginalPrice}{" "}
          </span>
          <span style={{ color: "#FFC107" }}>. </span> {symbol}{" "}
          {convertedDemoPrice} for the Demo class 100% free
        </h6>
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

export default CourselandingPage;
