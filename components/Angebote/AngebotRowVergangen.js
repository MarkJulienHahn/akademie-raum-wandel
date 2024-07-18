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

  const getLatestDate = (termine) =>
    termine?.reduce(
      (latest, termin) =>
        new Date(termin.date) > latest ? new Date(termin.date) : latest,
      new Date(termine[0].date)
    );

  const today = new Date();
  const latestDate = getLatestDate(angebot.termine);
  const inTheFuture = latestDate > today;

  return (
    !inTheFuture && (
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
            {angebot?.personen.map((person, i) => (
              <div key={i}>{person.name}</div>
            ))}
          </div>
          {/* <div className="disclaimer disclaimerRow">
            <p>
              <span className="termine">
                {numbersDE[angebot?.termine.length]}
              </span>
              {angebot?.zoom && " per Zoom"}{" "}
              {angebot?.aufzeichnung &&
                " mit danach versendeter Aufzeichnung für zeitliche Flexibilität."}
            </p>
          </div> */}
        </div>

        <div className="buttonRow">
          {angebot?.aufzeichnung ? (
            <Button
              value="Jetzt laden"
              light={true}
              border={true}
              href={`angebote/${angebot?.slug?.current}`}
            />
          ) : (
            <Button
              value="Mehr Infos"
              border={true}
              href={`angebote/${angebot?.slug?.current}`}
            />
          )}
        </div>
      </div>
    )
  );
};

export default AngebotRow;
