import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link

const courses = [
  {
    id: 1,
    title: "Chess",
    image: "https://picsum.photos/300/200",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle:
      "Chess: Sharpening young minds with strategy, focus, and problem-solving! ♟️🧠✨",
    description:
      "Chess Course offers a structured, interactive learning experience with AI insights, expert coaching, puzzles, tournaments, and an extensive e-book library to help players master chess. ♟️🔥",
    price: "$99",
    ageGroup: "5+",
    duration: "4 Weeks",
    format: "Online",
  },
  {
    id: 2,
    title: "Coding for Kids",
    image: "https://picsum.photos/300/200?random=2",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle:
      "Coding for Kids: Ignite Creativity, Logic & Future Skills! 💡💻🚀",
    description:
      "makes learning fun with interactive lessons, game development, hands-on coding, AI & robotics exploration, and teamwork-based projects to build creativity, logic, and future-ready skills! 💡",
    price: "$89",
    ageGroup: "8+",
    duration: "6 Weeks",
    format: "Online",
  },
  {
    id: 3,
    title: "Web Development",
    image: "https://picsum.photos/300/200?random=3",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle: "Web Development: Build, Design & Innovate! 🌐💻🚀",
    description:
      "Web Development Course: Learn front-end, back-end, and full-stack development through hands-on projects, responsive design, real-world applications, API integrations, and database management! 🌐",
    price: "$119",
    ageGroup: "10+",
    duration: "5 Weeks",
    format: "Online",
  },
  {
    id: 4,
    title: "Graphic Design",
    image: "https://picsum.photos/300/200?random=4",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle: "Graphic Design: Creativity Meets Visual Impact! 🎨✨",
    description:
      "Graphic Design Course: Master design fundamentals, branding, UI/UX, and digital creativity using Photoshop, Illustrator, Canva, and real-world projects! 🎨✨🚀",
    price: "$129",
    ageGroup: "14+",
    duration: "6 Weeks",
    format: "Online",
  },
  {
    id: 5,
    title: "Creative Writing",
    image: "https://picsum.photos/300/200?random=5",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle: "Creative Writing: Where Imagination Meets Words! ✍️✨📖",

    description:
      "Creative Writing Course: Master storytelling, enhance creativity, and craft compelling content through fiction, poetry, and real-world writing projects! ✍️📖✨",
    price: "$79",
    ageGroup: "10+",
    duration: "5 Weeks",
    format: "Online",
  },
  {
    id: 6,
    title: "Art & Craft",
    image: "https://picsum.photos/300/200?random=6",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle: "Art & Craft: Create, Imagine, Inspire! 🎨✨✂️",
    description:
      "Art & Craft Course: Spark creativity with hands-on projects, painting, DIY crafts, and design techniques while exploring artistic expression, enhancing fine motor skills, and building a unique creative portfolio! 🎨✨✂️🚀",
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
                  <Link to={`/course/${course.id}`} className="text-danger">
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
