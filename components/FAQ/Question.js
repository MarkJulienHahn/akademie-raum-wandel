import { PortableText } from "next-sanity";
import { useState, useEffect, useRef } from "react";

const Question = ({ question, setActiveIndex, activeIndex, i }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (activeIndex === i) {
      contentRef.current.classList.add("open");
    } else {
      contentRef.current.classList.remove("open");
    }
  }, [activeIndex, i]);

  return (
    <div
      className="faqQuestionWrapper"
      onClick={() => {
        activeIndex === i ? setActiveIndex(null) : setActiveIndex(i);
      }}
    >
      <div className={`faqQuestion ${activeIndex !== i && "faqInactive"}`}>{question?.frage}</div>

      <div
        ref={contentRef}
        className="faqAnswer"
      >
        <PortableText value={question?.antwort} />
      </div>
    </div>
  );
};

export default Question;
