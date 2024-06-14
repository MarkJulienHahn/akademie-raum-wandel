import React from "react";
import { PortableText } from "next-sanity";

import AngebotKachel from "../Angebote/AngebotKachel";

const Angebote = ({ content, locale }) => {
  return (
    <div className="homeSectionWrapper">
      <h3>Aktuelle Angebote</h3>
      <div className="homeAngeboteWrapper">
        {content.map(
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
