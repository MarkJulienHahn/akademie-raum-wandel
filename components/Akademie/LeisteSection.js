import { PortableText } from "next-sanity";
import React from "react";

const LeisteSection = ({ entry }) => {
  return (
    <>
      <h3>{entry.thema}</h3>
      <h1>{entry.headline}</h1>
      <PortableText value={entry.text} />
    </>
  );
};

export default LeisteSection;
