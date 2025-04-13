import React, { useState } from "react";
import "./contactus.css";
import Navmenu from "../navbar/Navmenu";
import Footer from "../Footer/Footer";
import { IoLocationSharp } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbynqmopMV_rNQVrQJ34wS0I_vd1ftsY4ePFNhSUBuSyXTTgoBEY8PK3xYL1R259GVZ-/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.success) {
        setShowPopup(true);
        e.target.reset();
      } else {
        console.error("Server error:", result);
        alert("Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "An error occurred while submitting the form. Please check your connection and try again."
      );
    }
  };

  return (
    <>
      <Navmenu />
      <div className="contact-us-header text-center text-sm-center">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-us-container">
        <div className="form-section">
          <h2>
            Learn. Create. Compete. KingCompiler — Where Young Minds Rise.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <div className="phone-input">
                <input
                  type="text"
                  name="countryCode"
                  placeholder="Country Code"
                  className="country-code"
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="phone-number"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write your message here"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="info-section">
          <h3>Our Information</h3>
          <p>
            <strong style={{ fontSize: "1.5rem" }}>
              <IoLocationSharp />
            </strong>{" "}
            6121 Denton Dr, Suite 101, Dallas, TX 75235, USA
          </p>
          <p>
            <strong style={{ fontSize: "1.5rem" }}>
              <MdAddLocationAlt />
            </strong>{" "}
            Kalikapur, Garia, Kolkata, West Bengal, India
          </p>
          <div className="contact-info">
            <p>
              <strong style={{ fontSize: "1.5rem" }}>
                <FaPhoneVolume />
              </strong>{" "}
              +91 90381 62791
            </p>
            <p>
              <strong style={{ fontSize: "1.5rem" }}>
                <MdEmail />
              </strong>{" "}
              kingcompilerinfo@gmail.com
            </p>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="thank-you-popup">
          <p>Thank you for contacting us! We will get back to you soon.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ContactUs;
