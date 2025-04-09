import React from "react";
import "./AboutCourse.css"; // Import the CSS for styling

const AboutCourse = ({ course }) => {
  return (
    <div className="about-course-container">
      <h2 className="about-course-title">About the Course</h2>
      <h3 style={{ fontSize: "15px" }}>{course.desctitle}</h3>
      <p className="about-course-description">{course.About}</p>
    </div>
  );
};

export default AboutCourse;
