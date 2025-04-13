import React, { useEffect } from "react";
import { parentReviews } from "../../data/ParentReviewdata";

const StarRating = ({ rating }) => {
  return (
    <div className="mb-2 text-warning fs-5">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`bi ${i < rating ? "bi-star-fill" : "bi-star"}`}
        ></i>
      ))}
    </div>
  );
};

const ParentReviewCarousel = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("parentReviewCarousel");
    const pageNumberElement = document.getElementById("carouselPageNumber");

    const updatePageNumber = () => {
      const activeIndex = Array.from(
        carouselElement.querySelectorAll(".carousel-item")
      ).findIndex((item) => item.classList.contains("active"));
      pageNumberElement.textContent = `${activeIndex + 1} / ${
        parentReviews.length
      }`;
    };

    carouselElement.addEventListener("slid.bs.carousel", updatePageNumber);

    return () => {
      carouselElement.removeEventListener("slid.bs.carousel", updatePageNumber);
    };
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Reviews from Parents</h2>
      <div
        id="parentReviewCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* Pagination dots */}
        <div className="carousel-indicators">
          {parentReviews.map((_, index) => (
            <button
              type="button"
              data-bs-target="#parentReviewCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
              key={index}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {parentReviews.map((review, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="card p-4 shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="rounded-circle me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h5 className="mb-0">{review.name}</h5>
                    <small className="text-muted">
                      {review.age} years old, {review.country}
                    </small>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-secondary">{review.text}</p>
                <p className="text-muted mb-0">
                  <strong>Course:</strong> {review.course}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#parentReviewCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#parentReviewCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Small arrows for navigation */}
        <div className="d-flex justify-content-end mt-2">
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            type="button"
            data-bs-target="#parentReviewCarousel"
            data-bs-slide="prev"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            type="button"
            data-bs-target="#parentReviewCarousel"
            data-bs-slide="next"
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        {/* Page number display */}
        <div className="text-center mt-3">
          <span id="carouselPageNumber">1 / {parentReviews.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ParentReviewCarousel;

// Ensure Bootstrap JavaScript is included in your project. If not, add the following to your HTML file:
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
