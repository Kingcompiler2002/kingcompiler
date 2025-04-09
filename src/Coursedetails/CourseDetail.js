import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navmenu from "../component/navbar/Navmenu";
import Footer from "../component/Footer/Footer";
import CourselandingPage from "./Coursecomponent/Courselandingpage";
import AboutCourse from "./Aboutcourse/AboutCourse";
import CourseActions from "./Courseaction/CourseActions";
import { courses } from "../data/coursedata.js";
const CourseDetail = () => {
  const { id } = useParams();

  // Ensure `useState` is called at the top level
  const [activeTab, setActiveTab] = useState("overview");

  // Find course once and store in a variable
  const course = courses.find((c) => c.id === parseInt(id));

  // Handle if course is not found correctly
  if (!course) {
    return <h2 className="text-center">Course Not Found</h2>;
  }

  return (
    <>
      <Navmenu />
      <CourselandingPage courses={courses} courseId={id} />
      <AboutCourse course={course} />
      {/* ✅ Pass course to CourseActions */}
      <CourseActions course={course} />

      <Footer />
    </>
  );
};

export default CourseDetail;
