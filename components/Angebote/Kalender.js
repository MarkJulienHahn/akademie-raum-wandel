"use client";

import { useState, useEffect } from "react";
import AngebotRow from "./AngebotRow";
import AngebotRowVergangen from "./AngebotRowVergangen";
import Filter from "./Filter";

const Kalender = ({ angebote, personen }) => {
  const [angeboteFiltered, setAngeboteFiltered] = useState([]);
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
    <div>
      <Filter
        setAngeboteFiltered={setAngeboteFiltered}
        personen={personen}
        angebote={angebote}
        className={shouldFadeIn ? "" : "fade-in"}
      />
      {angeboteFiltered.map((angebot, i) => (
        <div key={i}>
          <AngebotRow angebot={angebot} />
        </div>
      ))}
      {angeboteFiltered.length ? (
        <h3
          className="vergangenHeadline"
          style={{
            marginTop: 0,
            borderTop: "1.5px solid",
            paddingTop: "var(--space-S)",
          }}
        >
          Vergangene Angebote
        </h3>
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
      {!angeboteFiltered.length && (
        <h2 style={{ textAlign: "center" }}>
          In dieser Konfiguration gibt es leider keine Angebote.
        </h2>
      )}
    </div>
  );
};

export default Kalender;
