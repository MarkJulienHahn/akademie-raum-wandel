"use client";

import { useState, useEffect } from "react";

import AngebotKachel from "./AngebotKachel";
import AngebotKachelVergangen from "./AngebotKachelVergangen";
import Filter from "./Filter";

const Angebote = ({ angebote, personen }) => {
  const [angeboteFiltered, setAngeboteFiltered] = useState(angebote);
  const [shouldFadeIn, setShouldFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1000) {
        setShouldFadeIn(window.scrollY > 100);
      } else {
        setShouldFadeIn(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setShouldFadeIn(false);
      } else {
        handleScroll();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Filter
        setAngeboteFiltered={setAngeboteFiltered}
        personen={personen}
        angebote={angebote}
        className={shouldFadeIn ? "" : "fade-in"}
      />

      <div className="angeboteKachelnWrapper">
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
      </div>

      {angeboteFiltered.length ? (
        <h3 className="vergangenHeadline">Vergangene Angebote</h3>
      ) : (
        ""
      )}
      <div className="angeboteKachelnWrapper">
        {angeboteFiltered.map((angebot, i) => (
          <div key={i}>
            <AngebotKachelVergangen angebot={angebot} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Angebote;
