import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link

import { courses } from "../../data/coursedata"; // Import your course data

const Course = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const handleShow = (videoUrl) => {
    setActiveVideo(videoUrl);
    setShowModal(true);
  };

  const handleClose = () => {
    setActiveVideo("");
    setShowModal(false);
  };

  return (
    <div id="courses-section" className="container my-5">
      <h2
        style={{ fontFamily: "cursive", fontWeight: "bold" }}
        className="text-center mb-4"
      >
        Our Most Popular Courses
      </h2>
      <p
        style={{ fontFamily: "cursive", fontWeight: "lighter" }}
        className="text-center mb-4"
      >
        A wide range of certified courses designed by experts for the holistic
        development of your child!
      </p>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 style={{ fontWeight: "bold" }} className="card-title">
                    {course.title}
                  </h5>
                  <button
                    style={{
                      backgroundColor: "#786349",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    className="btn  btn-sm"
                    onClick={() => handleShow(course.videoUrl)}
                  >
                    ▶ Play
                  </button>
                </div>

                <h6
                  style={{ marginTop: "6px", fontStyle: "italic" }}
                  className="card-text"
                >
                  {course.desctitle}
                </h6>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "bolder",
                    fontSize: "14px",
                    color: "grey",
                  }}
                  className="card-text"
                >
                  {course.description}
                </p>
                <ul className="list-unstyled">
                  <li>
                    <strong>Age Group:</strong> {course.ageGroup}
                  </li>
                  <li>
                    <strong>Format:</strong> {course.format}
                  </li>
                </ul>
                <button
                  style={{
                    backgroundColor: "#f6c61a",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  className="btn btn-warning w-100"
                >
                  Book Free Trial
                </button>
                <h5 className="text-center mt-2">
                  <Link
                    to={`/course/${course.id}`}
                    style={{ color: "#786349" }}
                  >
                    View details
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for YouTube Lightbox */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9">
            <iframe
              width="100%"
              height="700"
              src={activeVideo}
              title="Course Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Course;
