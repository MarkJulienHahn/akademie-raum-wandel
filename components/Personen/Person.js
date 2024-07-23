"use client";

import { useEffect, useRef } from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";

const Person = ({ person, scroll }) => {
  const ref = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scroll === person?.slug?.current && ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
        });
      }
    }, 500);

    // Cleanup the timer if the component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, [scroll, person?.slug?.current]);

  return (
    <>
      <div ref={ref}></div>
      <div className="personImg">
        <Image
          src={person.portrait.asset.url}
          alt={person.name || "Person portrait"}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="personInfo">
        <h3>{person?.rolle}</h3>
        <h1>{person?.name}</h1>
        <PortableText value={person.textLang} />
      </div>
    </>
  );
};

export default Person;
