import React from "react";
import "./Learningmap.css"; // Optional for styling if needed
import { courses } from "../../../../../data/coursedata.js"; // Adjust the import path as necessary

const LearningMap = ({ courseId }) => {
  const course = courses.find((c) => c.id === parseInt(courseId));

  if (!course || !course.learningMap) return <p>Learning map not available.</p>;

  const { title, description } = course.learningMap;

  return (
    <div className=" learning-map-box p-4 my-3 bg-light border rounded shadow ">
      <p>{description}</p>
    </div>
  );
};

export default LearningMap;
