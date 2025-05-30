import { PortableText } from "next-sanity";
import { Link } from "@/navigation";

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

const AngebotRow = ({ angebot, fromSingle }) => {
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
  

  console.log(angebot);

  return inTheFuture ? (
    <div className="angebotRow">
      <div className="katRow">
        <p>{angebot?.kategorie}</p>
        {angebot?.kammer && (
          <div className="kammer kammerRow">
            Kammer-
            <br />
            anrechnung
          </div>
        )}
      </div>
      <div className="discRow">
        <Link
          href={
            !fromSingle
              ? `angebote/${angebot?.slug?.current}`
              : angebot?.slug?.current
          }
        >
          <h1 className="rowHeadline">{angebot?.title}</h1>
          <h1 className="rowHeadline rowHeadlineBottom">{angebot?.subtitle}</h1>
        </Link>
        <PortableText value={angebot.descriptionShort} />
      </div>
      <div className="datesRow">
        <div className="dateRow dates">
          <div>
            {angebot.kategorie !== "Webinar" ? (
              <>
                {formatDateDE(angebot?.termine[0].date)}
                {angebot?.termine.length > 1 && "—"}
              </>
            ) : (
              "Jederzeit verfügbar"
            )}
          </div>
          <div>
            {angebot?.termine?.length > 1 &&
              `${formatDateDE(angebot?.termine[angebot?.termine?.length - 1]?.date)}`}
          </div>
        </div>
        <div className="persRow">
          {angebot?.personen?.map((person, i) => (
            <div key={i}>{person.name}</div>
          ))}
        </div>

        {angebot.kategorie !== "Webinar" && (
          <div className="disclaimer disclaimerRow">
            <p>
              <span className="termine">
                {numbersDE[angebot?.termine?.length]}
              </span>
              {angebot?.zoom && angebot.kategorie !== "Webinar" && " per Zoom"}
              {angebot?.aufzeichnung &&
                angebot.kategorie !== "Webinar" &&
                " mit danach versendeter Aufzeichnung für zeitliche Flexibilität."}
            </p>
          </div>
        )}
      </div>

      <div className="buttonRow">
        <Button
          value="Jetzt buchen"
          internal={`angebote/${angebot?.slug?.current}`}
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default AngebotRow;
