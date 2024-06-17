"use client";

import React from "react";
import { PortableText } from "next-sanity";

import AngebotKachel from "../Angebote/AngebotKachel";

const Angebote = ({ content, locale }) => {
  const today = new Date();

  const futureContent = content.filter((entry) =>
    entry.termine.some((termin) => new Date(termin.date) > today)
  );
  return (
    <div className="homeSectionWrapper">
      <h3>Aktuelle Angebote</h3>
      <div className="homeAngeboteWrapper">
        {futureContent.map(
          (entry, i) =>
            i <= 2 && (
              <div key={i}>
                <AngebotKachel angebot={entry} locale={locale} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Angebote;
