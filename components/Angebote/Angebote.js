"use client";

import { useState } from "react";

import AngebotKachel from "./AngebotKachel";
import AngebotRowVergangen from "./AngebotRowVergangen";
import Filter from "./Filter";

const Angebote = ({ angebote, personen }) => {
  const [angeboteFiltered, setAngeboteFiltered] = useState(angebote);

  return (
    <>
      <Filter
        setAngeboteFiltered={setAngeboteFiltered}
        personen={personen}
        angebote={angebote}
      />
      {angeboteFiltered.map((angebot, i) => (
        <div key={i}>
          <AngebotKachel angebot={angebot} />
        </div>
      ))}

      {!angeboteFiltered.length && (
        <h2 style={{ textAlign: "center", width: "100%" }}>
          In dieser Konfiguration gibt es leider keine Angebote.
        </h2>
      )}

      {angeboteFiltered.length ? (
        <h3 className="vergangenHeadline">Vergangene Angebote</h3>
      ) : (
        ""
      )}
      <div className="vergangen">
        {angeboteFiltered.map((angebot, i) => (
          <div key={i}>
            <AngebotRowVergangen angebot={angebot} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Angebote;
