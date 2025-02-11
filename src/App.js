import React from "react";
import "./bootstrap.min.css";
import Navmenu from "./component/navbar/Navmenu";
import LandingPage from "./component/landingpage/Landingpage";
import Course from "./component/Pages/Courses";
import Footer from "./component/Footer/Footer";
import Testimonials from "./component/Testimonial/Testimonials";
import WhyUs from "./component/Whyus/WhyUs";
import FreeTrial from "./component/Ourofferings/FreeTrial";

function App() {
  return (
    <>
      <Navmenu></Navmenu>
      <LandingPage></LandingPage>
      <Testimonials></Testimonials>
      <WhyUs></WhyUs>
      <FreeTrial></FreeTrial>
      <Course></Course>
      <Footer></Footer>
    </>
  );
}
export default App;
