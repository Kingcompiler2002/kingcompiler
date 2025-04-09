import React from "react";
import "./Curriculum.css"; // Optional for styling if needed

const Curriculum = ({ content }) => {
  return (
    <div className="curriculum-container">
      <h3>Course Curriculum</h3>
      <p>{content}</p>
    </div>
  );
};

export default Curriculum;
