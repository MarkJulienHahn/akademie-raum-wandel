"use client";
import { useState, useEffect } from "react";
import { PortableText } from "next-sanity";
import Button from "../Button";

import { formatDateDE, formatDateEN } from "../Dates";

const numbersDE = {
  1: "Ein Termin",
  2: "Zwei Termine",
  3: "Drei Termine",
  4: "Vier Termine",
  5: "Fünf Termine",
  6: "Sechs Termine",
  7: "Sieben Termine",
  8: "Acht Termine",
  9: "Neun Termine",
  10: "Zehn Termine",
  11: "Elf Termine",
  12: "Zwölf Termine",
  13: "Dreizehn Termine",
  14: "Vierzehn Termine",
  15: "Fünfzehn Termine",
  16: "Sechzehn Termine",
  17: "Siebzehn Termine",
  18: "Achtzehn Termine",
  19: "Neunzehn Termine",
  20: "Zwanzig Termine",
};

const AngebotKachel = ({ angebot, locale }) => {
  const dark = { background: "var(--dark)", color: "var(--light)" };
  const hell = { background: "var(--light)", color: "var(--dark)" };
  const blurDark = {
    backgroundSize: "cover",
    backgroundImage: `url(${angebot?.blurImageUrl})`,
    color: "var(--light)",
  };
  const blurLight = {
    backgroundSize: "cover",
    backgroundImage: `url(${angebot?.blurImageUrl})`,
    color: "var(--dark)",
  };

  const [style, setStyle] = useState(dark);

  const getLatestDate = (termine) =>
    termine?.reduce(
      (latest, termin) =>
        new Date(termin.date) > latest ? new Date(termin.date) : latest,
      new Date(termine[0].date)
    );

  const today = new Date();
  const latestDate = getLatestDate(angebot.termine);
  const inTheFuture = latestDate > today;

  useEffect(() => {
    if (angebot.hintergrund == "dark") setStyle(dark);
    if (angebot.hintergrund == "hell") setStyle(hell);
    if (angebot.hintergrund == "blurDark") setStyle(blurDark);
    if (angebot.hintergrund == "blurLight") setStyle(blurLight);
  }, []);

  return inTheFuture | (angebot.kategorie == "Webinar") ? (
    <div style={style} className="kachelWrapper">
      <div className="kachelHeadline">
        <h2>{angebot?.kategorie}</h2>

        <h1>{angebot?.title}</h1>

        <h2 className="kachelSubhead">
          {angebot?.subtitle && angebot?.subtitle}
        </h2>
      </div>
      <div
        style={{
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <div className="kachelDescr">
          <PortableText value={angebot.descriptionShort} />
        </div>
        <div className="dateKachel">
          <div className="dates">
            {angebot.kategorie !== "Webinar" &&
              formatDateDE(angebot?.termine[0]?.date)}
            {angebot?.termine?.length > 1 &&
              `— ${formatDateDE(angebot?.termine[angebot?.termine?.length - 1]?.date)}`}
          </div>

          {angebot?.kammer && (
            <div className="kammer">
              Kammer-
              <br />
              anrechnung
            </div>
          )}
        </div>

        <div className="disclaimer">
          <p>
            <span className="termine">
              {numbersDE[angebot?.termine?.length]}
            </span>
            {angebot?.zoom && " per Zoom"}{" "}
            {angebot?.aufzeichnung &&
              " mit danach versendeter Aufzeichnung für zeitliche Flexibilität."}
          </p>
        </div>

        <div className="angebotButtonWrapper">
          <Button
            value={"Jetzt buchen"}
            light={
              angebot.hintergrund == "dark" || angebot.hintergrund == "blurDark"
                ? true
                : false
            }
            internal={`angebote/${angebot?.slug?.current}`}
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AngebotKachel;
