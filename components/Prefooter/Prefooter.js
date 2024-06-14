"use client";
import React from "react";
import Button from "../Button";
import { PortableText } from "next-sanity";

const Prefooter = ({ content }) => {
  console.log(content);

  return (
    <div className="prefooterWrapper">
      <div className="prefooterLeft">
        <h2>{content?.headline}</h2>
        <Button value={content?.button?.text} />
        <PortableText value={content?.disclaimer} />
      </div>
      <div className="prefooterRight">
        <PortableText value={content?.text} />
      </div>
    </div>
  );
};

export default Prefooter;
