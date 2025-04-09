import React, { useState } from "react";
import Overview from "./Overview/Overview";
import Curriculum from "./Curriculum/Curriculum";
import "./CourseActions.css";

const CourseActions = ({ course }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container my-5">
      <div className="text-center mb-4 button-container">
        <button
          className={`btn  me-2 action-btn ${
            activeTab === "overview" && "active"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          OVERVIEW
        </button>
        <button
          className={`btn action-btn ${activeTab === "curriculum" && "active"}`}
          onClick={() => setActiveTab("curriculum")}
        >
          CURRICULUM
        </button>
      </div>

      {/* ✅ Dynamically render Overview or Curriculum with course */}
      {activeTab === "overview" ? (
        <Overview course={course} />
      ) : (
        <Curriculum course={course} />
      )}
    </div>
  );
};

export default CourseActions;
