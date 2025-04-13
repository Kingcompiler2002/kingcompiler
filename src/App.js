import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CourseDetail from "../src/Coursedetails/CourseDetail";
import AboutUs from "./component/AboutUs/aboutusmain.js";
import ContactUs from "./component/ContactUs/contactus.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </>
  );
}
export default App;
