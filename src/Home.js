import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./bootstrap.min.css";
import Navmenu from "./component/navbar/Navmenu";
import LandingPage from "./component/landingpage/Landingpage";
import Course from "./component/Coursemainpage/Courses.js";
import Footer from "./component/Footer/Footer";
import Testimonials from "./component/Testimonial/Testimonials";
import WhyUs from "./component/Whyus/WhyUs";
import FreeTrial from "./component/Ourofferings/FreeTrial";
import ParentReviewCarousel from "./component/Reviewfromparents/ParentReviewCarousel";
import Whatsapp from "./socialchat/Whatsapp.js";
import BookingForm from "./component/BookingForm.js";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <img
          src="https://i.postimg.cc/C1dsJ4MM/kingcompiler.gif"
          alt="Loading..."
          style={{ width: "150px" }}
        />
      </div>
    );
  }

  return (
    <>
      <Navmenu></Navmenu>
      <LandingPage></LandingPage>
      <Testimonials></Testimonials>
      <WhyUs></WhyUs>
      <FreeTrial></FreeTrial>
      <Course></Course>
      <ParentReviewCarousel></ParentReviewCarousel>
      <Footer></Footer>
      <div
        className="d-md-none fixed-bottom text-center"
        style={{
          backgroundColor: "#FFD700",
          padding: "10px",
        }}
      >
        <button
          className="btn btn-lg btn-outline-danger"
          style={{ color: "#1A1A1A", fontWeight: "bold" }}
          onClick={() => setShowForm(true)}
        >
          BOOK A FREE DEMO CLASS
        </button>
      </div>
      <Whatsapp />

      {/* Google Form Popup */}
      {showForm && (
        <BookingForm
          formUrl="https://forms.gle/AF7PwKJHWqWm94Sv5"
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
export default Home;
