import React, { useState } from "react";
import "./CourseSyllabus.css";
import { Carousel } from "react-bootstrap";

const CourseSyllabus = ({ syllabus }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <div className="syllabus-carousel-container my-5 px-3">
      <h3 className="fw-bold text-center mb-4">Course Syllabus</h3>

      <Carousel
        activeIndex={currentIndex}
        onSelect={handleSelect}
        interval={3000}
        controls={true}
        indicators={true}
        prevIcon={
          <span
            className="carousel-control-prev-icon custom-arrow"
            aria-hidden="true"
          />
        }
        nextIcon={
          <span
            className="carousel-control-next-icon custom-arrow"
            aria-hidden="true"
          />
        }
      >
        {syllabus.map((item, idx) => (
          <Carousel.Item key={idx}>
            <div className="syllabus-card text-center mx-auto">
              <h4 className="level fw-bold">{item.level}</h4>
              <h6 className="mb-3">{item.aim}</h6>
              <ul className="syllabus-list text-start">
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
              {idx < syllabus.length - 1 && (
                <div className="next-level mt-3 fw-semibold text-muted">
                  ⏭️ Next Level: {syllabus[idx + 1].level}
                </div>
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CourseSyllabus;
