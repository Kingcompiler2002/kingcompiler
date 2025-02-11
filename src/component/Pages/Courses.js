import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

const courses = [
  {
    id: 1,
    title: "React Basics",
    image: "https://picsum.photos/300/200",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    description: "Learn the fundamentals of React and build interactive UIs.",
    price: "$99",
    ageGroup: "12+",
    duration: "4 Weeks",
    format: "Online",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    image: "https://picsum.photos/300/200?random=2",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    description: "Master JavaScript, the backbone of modern web development.",
    price: "$89",
    ageGroup: "10+",
    duration: "6 Weeks",
    format: "Online & Offline",
  },
  {
    id: 3,
    title: "Next.js for Beginners",
    image: "https://picsum.photos/300/200?random=3",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    description: "Dive into Next.js and build fast, server-side rendered apps.",
    price: "$119",
    ageGroup: "15+",
    duration: "5 Weeks",
    format: "Online",
  },
  {
    id: 4,
    title: "Node.js & Express",
    image: "https://picsum.photos/300/200?random=4",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    description: "Explore backend development with Node.js and Express.",
    price: "$129",
    ageGroup: "14+",
    duration: "6 Weeks",
    format: "Online",
  },
  {
    id: 5,
    title: "Python for Beginners",
    image: "https://picsum.photos/300/200?random=5",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    description: "Start programming with Python and learn the basics.",
    price: "$79",
    ageGroup: "10+",
    duration: "5 Weeks",
    format: "Offline",
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    image: "https://picsum.photos/300/200?random=6",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    description: "Learn the basics of machine learning and AI applications.",
    price: "$149",
    ageGroup: "16+",
    duration: "8 Weeks",
    format: "Online",
  },
];

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
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Most Popular Courses</h2>
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
                  <h5 className="card-title">{course.title}</h5>
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => handleShow(course.videoUrl)}
                  >
                    ▶ Play
                  </button>
                </div>
                <p className="card-text">{course.description}</p>
                <ul className="list-unstyled">
                  <li>
                    <strong>Price:</strong> {course.price}
                  </li>
                  <li>
                    <strong>Age Group:</strong> {course.ageGroup}
                  </li>
                  <li>
                    <strong>Duration:</strong> {course.duration}
                  </li>
                  <li>
                    <strong>Format:</strong> {course.format}
                  </li>
                </ul>
                <button className="btn btn-danger w-100">
                  Book Free Trial
                </button>
                <h5
                  style={{
                    textAlign: "center",
                    paddingTop: "2%",
                    color: "red",
                  }}
                >
                  View details
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
              height="400"
              src={activeVideo}
              title="Course Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Course;
