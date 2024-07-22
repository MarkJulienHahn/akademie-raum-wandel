import React from "react";

import Image from "next/image";
import { PortableText } from "next-sanity";
import Button from "../Button";

const Personen = ({ content }) => {
  return (
    <div className="sectionWrapper bgGrey">
      <div className="imgColumn">
        <div className="imgWrapper">
          <Image src={content?.portrait?.asset.url} fill />
        </div>
        <PortableText value={content?.portrait?.caption} />
      </div>
      <div className="txtWrapper">
        <h2>{content?.headline}</h2>
        <div className="txtTwoColumn">
          <PortableText value={content?.textIsabel} />
          <PortableText value={content?.textKatharina} />
        </div>
        <p className="disclaimer">{content?.hinweis}</p>
        <div className="buttonContainer">
          <Button value={"Zu den Dozent:innen"} internal={"personen"} />
        </div>
      </div>
    </div>
  );
};

export default Personen;
