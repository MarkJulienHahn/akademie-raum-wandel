"use client";

import React, { useState, useEffect } from "react";
import NewsletterSignup from "./Footer/NewsletterSignup";

const visible = { opacity: 1 };
const inVisible = { opacity: 0, pointerEvents: "none" };

const NewsletterPopup = ({ content }) => {
  // Retrieve the initial state from session storage or default to true
  const initialShowState = sessionStorage.getItem("newsletterShow") === "false" ? false : true;
  const [show, setShow] = useState(initialShowState);

  // Synchronize the state with session storage
  useEffect(() => {
    sessionStorage.setItem("newsletterShow", show);
  }, [show]);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="newsletterPopupWrapper" style={show ? visible : inVisible}>
      <div className="newsletterClose" onClick={handleClick}>
        X
      </div>
      <NewsletterSignup show={show} content={content} />
    </div>
  );
};

export default NewsletterPopup;
