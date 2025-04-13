import React from "react";
import "./button.css";
import "../../src/bootstrap.min.css";

const BookNowButton = () => {
  return (
    <div className="book-now-container">
      <button
        className="btn btn-lg btn-outline-danger book-now-button"
        style={{ color: "#1A1A1A", fontWeight: "bold" }}
      >
        BOOK A FREE DEMO CLASS
      </button>
    </div>
  );
};

export default BookNowButton;
