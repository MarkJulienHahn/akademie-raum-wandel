"use client";

import React, { useState, useEffect } from "react";
import NewsletterSignup from "./Footer/NewsletterSignup";

// Styles for visibility
const visible = { opacity: 1, transition: "opacity 0.5s ease-in-out" };
const inVisible = {
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 0.5s ease-in-out",
};

const NewsletterPopup = ({ content }) => {
  const [show, setShow] = useState(true);

  // Retrieve the initial state from session storage on client-side mount
  useEffect(() => {
    const initialShowState =
      sessionStorage.getItem("newsletterShow") !== "false";
    setShow(initialShowState);
  }, []);

  // Synchronize the state with session storage
  useEffect(() => {
    sessionStorage.setItem("newsletterShow", show);
  }, [show]);

  // Handle click to toggle popup visibility
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="newsletterPopupWrapper" style={show ? visible : inVisible}>
      <div
        className="newsletterClose"
        onClick={handleClick}
      >
        X
      </div>
      <NewsletterSignup show={show} content={content} />
    </div>
  );
};

export default NewsletterPopup;
