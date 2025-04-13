import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  const whatsappNumber = "919038162791"; // ✅ Your number
  const message = "Hi, I would like to know more about KingCompiler!";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="whatsapp-container">
      <div className="whatsapp-popup">
        <p className="mb-1">👋 Hey there!</p>
        <p className="mb-2">Need help? Let’s chat on WhatsApp.</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-sm"
        >
          Chat Now
        </a>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
