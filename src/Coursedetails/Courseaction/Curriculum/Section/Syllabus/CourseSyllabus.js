import React from "react";
import "./CourseSyllabus.css";
import { Carousel } from "react-bootstrap";

const CourseSyllabus = ({ syllabus }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="syllabus-grid-container my-5">
      <h3 className="fw-bold">Course Syllabus</h3>
      {isMobile ? (
        <Carousel>
          {syllabus.map((item, idx) => (
            <Carousel.Item key={idx}>
              <div className="syllabus-card">
                <h4 className="level">{item.level}</h4>
                <h6>{item.aim}</h6>
                <ul
                  style={{ textAlign: "left" }}
                  className="syllabus-list syllabus-list"
                >
                  <li>{item.Duration}</li>
                  <hr />
                  <li>{item.Assignment}</li>
                  <hr />
                  <li>{item.class}</li>
                  <hr />
                  <li>{item.tournament}</li>
                  <hr />
                  <li>{item.makover}</li>
                  <hr />
                  <li>{item.maxStudents}</li>
                  <hr />
                  <li>{item.missedClass}</li>
                  <hr />
                  <li>{item.assessment}</li>
                  <hr />
                  <li>{item.specialPractice}</li>
                  <hr />
                  <li>{item.certificate}</li>
                </ul>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div
          className="syllabus-grid"
          style={{
            gridTemplateColumns: `repeat(${syllabus.length}, minmax(200px, 1fr))`,
          }}
        >
          {syllabus.map((item, idx) => (
            <div key={idx} className="syllabus-card">
              <h4 className="level">{item.level}</h4>
              <h6>{item.aim}</h6>
              <ul
                style={{ textAlign: "left" }}
                className="syllabus-list syllabus-list"
              >
                <li>{item.Duration}</li>
                <hr />
                <li>{item.Assignment}</li>
                <hr />
                <li>{item.class}</li>
                <hr />
                <li>{item.tournament}</li>
                <hr />
                <li>{item.makover}</li>
                <hr />
                <li>{item.maxStudents}</li>
                <hr />
                <li>{item.missedClass}</li>
                <hr />
                <li>{item.assessment}</li>
                <hr />
                <li>{item.specialPractice}</li>
                <hr />
                <li>{item.certificate}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseSyllabus;
