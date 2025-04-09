import React from "react";
import "./Overview.css"; // Add CSS for styling

const Overview = ({ course }) => {
  if (!course) {
    return <h2 className="text-center">Course Data Not Available</h2>;
  }

  return (
    <div className="container my-5">
      {/* ✅ Course Details Section */}
      <h2 className="text-left mb-4 fw-bold">Course Details</h2>
      <div className="row text-center g-4">
        {course.courseDetails.map((detail, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div className="detail-box p-4 shadow-sm rounded">
              <h3
                className="fw-bold "
                style={{ color: "black", fontSize: "1.5rem" }}
              >
                {detail.value}
              </h3>

              <p className="text-item">
                <span>{detail.title}</span> <br />
                <span>{detail.desc}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ What You Will Receive Section */}
      <h2 className="text-left mt-5 mb-4 fw-bold">What You Will Receive</h2>
      <div className="row g-4">
        {course.whatYouReceive.map((item, index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6 d-flex align-items-start"
          >
            <div className="icon-container me-3">
              <img
                src={item.img} // Random icons/images
                alt="icon"
                className="icon-img"
              />
            </div>
            <div>
              <h5 className="fw-bold text-color">{item.title}</h5>
              <p className="text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
