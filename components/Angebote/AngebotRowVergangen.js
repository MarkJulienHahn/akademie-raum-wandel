import { PortableText } from "next-sanity";

import { formatDateDE, formatDateEN } from "../Dates";
import Button from "../Button";

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

const AngebotRow = ({ angebot }) => {
  const formatPriceInEuro = (value) =>
    `${value.toFixed(2).replace(".", ",")} €`;

  const getFirstFutureDateTime = (termine) => {
    if (!Array.isArray(termine)) return null;
  
    const now = new Date();
  
    return termine.find((termin) => {
      const dateTimeString = `${termin.date}T${termin.start}:00`;
      const dateTime = new Date(dateTimeString);
      return dateTime >= now;
    });
  };
  
  const inTheFuture = !!getFirstFutureDateTime(angebot.termine);
  

  return (
    !inTheFuture &&
    angebot.kategorie !== "Webinar" && (
      <div className="angebotRow vergangen">
        <div className="katRow">
          <p>{angebot?.kategorie}</p>
        </div>
        <div className="discRow">
          <h1 className="rowHeadline">{angebot?.title}</h1>
          <PortableText value={angebot.descriptionShort} />
        </div>
        <div className="datesRow">
          {angebot?.aufzeichnung && (
            <div className="dateRow dates">Aufzeichnung verfügbar</div>
          )}
          <div className="persRow">
            {angebot?.personen?.map((person, i) => (
              <div key={i}>{person.name}</div>
            ))}
          </div>
        </div>

        <div className="buttonRow">
          {angebot?.aufzeichnung ? (
            <Button
              value="Jetzt laden"
              light={true}
              border={true}
              internal={`angebote/${angebot?.slug?.current}`}
            />
          ) : (
            <Button
              value="Mehr Infos"
              border={true}
              internal={`angebote/${angebot?.slug?.current}`}
            />
          )}
        </div>
      </div>
    )
  );
};

export default AngebotRow;
