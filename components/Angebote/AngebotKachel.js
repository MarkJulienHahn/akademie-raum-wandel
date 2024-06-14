"use client";
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
  const blur = {
    backgroundSize: "cover",
    backgroundImage: `url(${angebot?.blurImageUrl})`,
    color: "var(--light)",
  };

  const getLatestDate = (termine) =>
    termine.reduce(
      (latest, termin) =>
        new Date(termin.date) > latest ? new Date(termin.date) : latest,
      new Date(termine[0].date)
    );

  const today = new Date();
  const latestDate = getLatestDate(angebot.termine);
  const inTheFuture = latestDate > today;

  return (
    inTheFuture && (
      <div
        style={
          angebot?.hintergrund == "dunkel"
            ? dark
            : angebot?.hintergrund == "blur"
              ? blur
              : hell
        }
        className="kachelWrapper"
      >
        <h2>
          {angebot?.kategorie.map((kategorie, i, arr) => (
            <span key={i}>
              {kategorie}
              {i < arr.length - 1 ? " / " : ""}
            </span>
          ))}
        </h2>
        <h1>{angebot?.title}</h1>
        {angebot?.subtitle && <h2 className="kachelSubhead">{angebot?.subtitle}</h2>}
        <div className="kachelDescr">
          <PortableText value={angebot.descriptionShort} />
        </div>
        <div className="dateKachel">
          <div className="dates">
            {formatDateDE(angebot?.termine[0].date)}{" "}
            {angebot?.termine.length > 1 &&
              `— ${formatDateDE(angebot?.termine[angebot?.termine.length - 1]?.date)}`}
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
              {numbersDE[angebot?.termine.length]}
            </span>
            {angebot?.zoom && " per Zoom"}{" "}
            {angebot?.aufzeichnung &&
              " mit danach versendeter Aufzeichnung für zeitliche Flexibilität."}
          </p>
        </div>

        <div className="angebotButtonWrapper">
          <Button
            value={locale == "de" ? "Mehr erfahren" : "Learn more"}
            light={angebot?.hintergrund == "hell" ? false : true}
            href={`angebote/${angebot?.slug?.current}`}
          />
        </div>
      </div>
    )
  );
};

export default AngebotKachel;