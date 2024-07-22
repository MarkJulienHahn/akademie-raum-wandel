"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

// Styles for visibility
const visible = { opacity: 1, transition: "opacity 0.5s ease-in-out" };
const inVisible = {
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 0.5s ease-in-out",
};

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

const BookNowPopup = ({
  buchungslink,
  titel,
  termine,
  preis,
  zoom,
  aufzeichnung,
  kategorie,
}) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  const getLatestDate = (termine) =>
    termine &&
    termine.reduce(
      (latest, termin) =>
        new Date(termin.date) > latest ? new Date(termin.date) : latest,
      new Date(termine[0].date)
    );
  const today = new Date();
  const latestDate = getLatestDate(termine);
  const inTheFuture = latestDate > today;

  useEffect(() => {
    return () => {
      setShow(true);
    };
  }, []);

  return (
    (inTheFuture || kategorie == "Webinar") && (
      <div className="buyNowPopupWrapper" style={show ? visible : inVisible}>
        <div className="newsletterClose" onClick={() => handleClick()}>
          X
        </div>
        <div className="buyHeadline">
          <h1>{titel}</h1>
          <h2>{preis} €</h2>
          <p>
            <span className="termine">{numbersDE[termine?.length]}</span>
            {zoom && " per Zoom"}
            {aufzeichnung &&
              " mit danach versendeter Aufzeichnung für zeitliche Flexibilität."}
          </p>
        </div>
        <Button value={"Jetzt buchen"} href={buchungslink} />
      </div>
    )
  );
};

export default BookNowPopup;
