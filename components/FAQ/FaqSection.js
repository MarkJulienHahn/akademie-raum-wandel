"use client";

import { useState } from "react";
import Question from "./Question";

const FaqSection = ({ questions, sectionIndex }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSectionIndex, setActiveSectionIndex] = useState(null);

  return (
    <>
      <div className="faqWrapper">
        <h3>{questions?.thema}</h3>
        <div className="faqAcc">
          {questions.fragen.map((question, i) => (
            <div key={i}>
              <Question
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
                setActiveSectionIndex={setActiveSectionIndex}
                activeSectionIndex={activeSectionIndex}
                sectionIndex={sectionIndex}
                question={question}
                i={i}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqSection;
