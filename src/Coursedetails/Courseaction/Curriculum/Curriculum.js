import React from "react";
import "./Curriculum.css"; // Optional for styling if needed
import CourseSyllabus from "./Section/Syllabus/CourseSyllabus"; // Import CourseSyllabus component
import LearningMap from "./Section/Learningmap/Learningmap"; // Import LearningMap component
const Curriculum = ({ course }) => {
  const syllabus = course.syllabus;
  if (!course) return null;

  return (
    <div className="mt-4 box">
      <h3 className="fw-bold">Learning Map</h3>

      {/* Pass the whole course or just course.id to LearningMap */}
      <LearningMap courseId={course.id} />
      <CourseSyllabus syllabus={syllabus} />
    </div>
  );
};

export default Curriculum;
