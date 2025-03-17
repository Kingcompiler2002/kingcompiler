import React from "react";
import { useParams } from "react-router-dom";
import Navmenu from "../component/navbar/Navmenu";
import Footer from "../component/Footer/Footer";

const courses = [
  {
    id: 1,
    title: "Chess",
    image: "https://picsum.photos/300/200",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle: "Chess: Sharpening young minds with strategy! ♟️",
    description:
      "Chess Course offers structured, interactive learning with AI insights, expert coaching, puzzles, tournaments, and an extensive e-book library! ♟️🔥",
    price: "$99",
    ageGroup: "5+",
    duration: "4 Weeks",
    format: "Online",
  },
  // Other courses...
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <h2 className="text-center">Course Not Found</h2>;

  return (
    <>
      <Navmenu></Navmenu>
      <div className="container my-5">
        <h2 className="text-center">{course.title}</h2>
        <img src={course.image} className="img-fluid" alt={course.title} />
        <h4 className="mt-3">{course.desctitle}</h4>
        <p>{course.description}</p>
        <p>
          <strong>Age Group:</strong> {course.ageGroup}
        </p>
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>Format:</strong> {course.format}
        </p>
        <p>
          <strong>Price:</strong> {course.price}
        </p>
        <h3>Course Video</h3>
        <iframe
          width="100%"
          height="400"
          src={course.videoUrl}
          title="Course Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CourseDetail;
