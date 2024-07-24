"use client";

import Image from "next/image";

import { PortableText } from "next-sanity";
import React from "react";

const FeedSection = ({ entry, i }) => {
  function isEven(number) {
    return number % 2 === 0;
  }

  return (
    <div
      className="feedSection"
      style={{ flexDirection: isEven(i) ? "row" : "row-reverse" }}
    >
      <div className="feedSectionColumn">
        <div>
          <h3>{entry.thema}</h3>
          <h1>{entry.headline}</h1>
          <PortableText value={entry.text} />
        </div>
      </div>
      <div className="feedSectionImage">
        <h1>{entry.thema}</h1>
        <Image
          src={entry.background?.asset.url}
          layout="fill"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default FeedSection;
