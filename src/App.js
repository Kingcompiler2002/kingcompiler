import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CourseDetail from "../src/Coursedetails/CourseDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </>
  );
}
export default App;
