import { PortableText } from "next-sanity";
import { useState, useEffect, useRef } from "react";

const Question = ({
  question,
  setActiveIndex,
  activeIndex,
  i,
  setActiveSectionIndex,
  activeSectionIndex,
  sectionIndex,
}) => {
  const contentRef = useRef(null);

  const onToggle = () => {
    activeIndex === i ? setActiveIndex(null) : setActiveIndex(i);
  };

  useEffect(() => {
    if (activeIndex === i) {
      contentRef.current.classList.add("open");
    } else {
      contentRef.current.classList.remove("open");
    }
  }, [activeIndex, activeSectionIndex]);

  useEffect(() => {
    activeIndex === i
      ? setActiveSectionIndex(null)
      : setActiveSectionIndex(sectionIndex);
    console.log(activeSectionIndex, sectionIndex);
  }, [activeIndex]);

  return (
    <div className="faqQuestionWrapper" onClick={onToggle}>
      <div
        className={`faqQuestion ${activeIndex !== i && activeSectionIndex != null && activeSectionIndex == sectionIndex && "faqInactive"}`}
      >
        {question?.frage}
      </div>

      <div ref={contentRef} className="faqAnswer">
        <PortableText value={question?.antwort} />
      </div>
    </div>
  );
};

export default Question;
