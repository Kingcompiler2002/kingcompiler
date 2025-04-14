import React from "react";
import "./aboutusmain.css"; // Import the CSS for styling
import Navmenu from "../navbar/Navmenu";
import Footer from "../Footer/Footer";
import Whatsapp from "../../socialchat/Whatsapp";
import BookNowButton from "../../Booknowbutton/button"; // Import the Book Now button component

const countries = [
  { name: "India", code: "in" },
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "Canada", code: "ca" },
  { name: "Germany", code: "de" },
  { name: "Australia", code: "au" },
  { name: "Singapore", code: "sg" },
  { name: "France", code: "fr" },
  { name: "Brazil", code: "br" },
  { name: "Japan", code: "jp" },
  { name: "South Korea", code: "kr" },
];

const AboutUs = () => {
  return (
    <>
      <Navmenu></Navmenu>
      <div className="container py-5 ">
        <h1 className="text-center fw-bold mb-4 text-dark about-us-section">
          About KingCompiler Academy
        </h1>
        <p className="text-center lead mb-5">
          KingCompiler is an innovative platform that blends chess, coding,
          creativity, and community for young learners. We're dedicated to
          building cognitive, technical, and creative skills that help students
          thrive in the digital world and beyond.
        </p>

        <section className="mb-5">
          <h2 className="h4 fw-semibold mb-3">🎓 What is KingCompiler?</h2>
          <p>
            KingCompiler is an online and offline learning platform designed to
            provide school students with a structured and engaging environment
            to develop vital skills. Through a blend of chess education, coding
            for kids, web development, creative arts, and more, we focus on
            empowering the next generation of thinkers, creators, and
            problem-solvers.
          </p>
        </section>
        <section className="mb-5 about-section">
          <h2 className="h4 fw-semibold mb-3">🔥 Why Choose KingCompiler?</h2>
          <ul className="list-unstyled">
            <li>
              <span className="li-value">Expertly Designed Curriculum: </span>{" "}
              Developed by international chess players and software developers.
            </li>
            <li>
              <span className="li-value">Engaging & Fun Learning: </span> Where
              creativity meets discipline, and learning is a journey of growth.
            </li>
            <li>
              <span className="li-value">
                Builds Confidence & Problem-Solving Skills:{" "}
              </span>{" "}
              Foster critical thinking, logic, and creativity in every student.
            </li>
            <li>
              <span className="li-value">
                Friendly for Kids, Parents, and Schools:{" "}
              </span>{" "}
              Flexible, inclusive, and supportive for all ages.
            </li>
          </ul>
        </section>

        <section className="mb-5 about-section">
          <h2 className="h4 fw-semibold mb-3">🌟 Key Features</h2>
          <ul className="list-unstyled key-feature">
            <li>
              <span className="li-value">Personal Student Dashboard: </span>{" "}
              Track progress, classes, assignments, and achievements.
            </li>
            <hr />
            <li>
              <span className="li-value">KingCompiler Academy Courses: </span>{" "}
              Online/offline courses in Chess, Coding (Web Dev, Python, Games),
              Graphic Design, Creative Writing, Art & Craft, and more.
            </li>
            <hr />
            <li>
              <span className="li-value">Local Tournament Calendar: </span> Stay
              updated with offline chess events in your area.
            </li>
            <hr />
            <li>
              <span className="li-value">AI Game Analyzer: </span> Use AI to
              analyze and improve your chess strategies.
            </li>
            <hr />
            <li>
              <span className="li-value">Interactive E-book Library: </span>{" "}
              Access resources on chess, coding, and creative subjects.
            </li>
            <hr />
            <li>
              <span className="li-value">Online Classroom: </span> Live classes
              with experienced mentors.
            </li>
            <hr />
            <li>
              <span className="li-value">Workbooks & Projects: </span> Practical
              worksheets, group, and individual projects.
            </li>
            <hr />
            <li>
              <span className="li-value">Weekly Tournaments: </span> Online
              tournaments to build competitive skills.
            </li>
            <hr />
            <li>
              <span className="li-value">Puzzle Practice Room: </span> Daily
              brain-boosting puzzles for chess and logic.
            </li>
            <hr />
            <li>
              <span className="li-value">Homework After 5 Minutes:</span>{" "}
              Engaging tasks for quick reinforcement of concepts.
            </li>
          </ul>
        </section>

        <section className="mb-5 about-section">
          <h2 className="h4 fw-semibold mb-3">📍 Location & Availability</h2>
          <p>
            KingCompiler offers online access worldwide. We're also currently
            running offline coding and chess camps in Canada and the USA, where
            students can engage in hands-on learning experiences.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4 fw-semibold mb-4 text-center">
            🌍 Our Global Presence
          </h2>
          <div className="flag-marquee overflow-hidden border rounded p-3 bg-light">
            <div className="scrolling-flags d-flex align-items-center">
              {countries.concat(countries).map((country, index) => (
                <div key={index} className="me-5 d-flex align-items-center">
                  <img
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt={country.name}
                    className="me-2"
                    style={{
                      width: "40px",
                      height: "30px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                  <span className="fw-medium">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mb-5 our-mission about-section">
          <h2 className="h4 fw-semibold mb-4 text-center text-white">
            Our Mission
          </h2>
          <div className="p-4 bg-white shadow rounded border bg-img">
            <p className="lead mb-4">
              At <strong>KingCompiler</strong>, our objective is to build a
              generation of logical thinkers, creative problem solvers, and
              confident learners by integrating the power of{" "}
              <strong>chess</strong>, <strong>coding</strong>, and{" "}
              <strong>creative expression</strong>.
            </p>
            <p className="mb-3">
              We strive to provide a future-ready education that:
            </p>
            <ul className="list-unstyled ps-3">
              <li>
                ✔️ Encourages critical thinking through strategic games like
                chess
              </li>
              <li>
                ✔️ Develops technical skills through fun and accessible coding
              </li>
              <li>
                ✔️ Sparks creativity through design, writing, and art projects
              </li>
              <li>
                ✔️ Fosters discipline, focus, and consistency in every child
              </li>
            </ul>
            <p className="mt-4">
              Our goal is to create a holistic learning experience that supports
              children not just academically, but also emotionally and socially
              — helping them thrive in school, competitions, and life beyond the
              classroom.
            </p>
          </div>
        </section>
        <section className="mb-5 about-section">
          <h2 className="h4 fw-semibold mb-4 text-center text-dark">
            📸 Follow Us on Instagram
          </h2>
          <div className="instagram-embed d-flex justify-content-center">
            <iframe
              title="KingCompiler Instagram Feed"
              src="https://www.instagram.com/kingcompiler.official/embed"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              allow="encrypted-media"
              className="rounded shadow"
            ></iframe>
          </div>
          <p className="text-center mt-3">
            <a
              href="https://www.instagram.com/kingcompiler.official"
              className="btn btn-danger"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit @kingcompiler.official on Instagram
            </a>
          </p>
        </section>
      </div>
      <Footer></Footer>
      <Whatsapp></Whatsapp>
      <BookNowButton></BookNowButton>
    </>
  );
};

export default AboutUs;
