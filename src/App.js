import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import CourseDetail from "../src/Coursedetails/CourseDetail";
import AboutUs from "./component/AboutUs/AboutUsMain.js";
import ContactUs from "./component/ContactUs/contactus.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
