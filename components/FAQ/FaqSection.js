"use client";

import { useState } from "react";
import { Link } from "@/navigation";
import Question from "./Question";

const FaqSection = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);
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
