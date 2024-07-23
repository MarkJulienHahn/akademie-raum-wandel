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
          loading="lazy"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "10px",
          }}
          placeholder="blur"
          blurDataURL={person.portrait.asset.metadata.lqip}
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
