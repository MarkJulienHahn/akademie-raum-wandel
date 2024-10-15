"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Link } from "@/navigation";
import { PortableText } from "next-sanity";

import AngebotRow from "./AngebotRow";

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

const variants = {
  hidden: { opacity: 1, y: 1000 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

import Button from "../Button";

const AngebotSingle = ({ angebot, angebote, slug, locale }) => {
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
  const key = usePathname();

  const getLatestDate = (termine) =>
    termine &&
    termine.reduce(
      (latest, termin) =>
        new Date(termin.date) > latest ? new Date(termin.date) : latest,
      new Date(termine[0].date)
    );
  const today = new Date();
  const latestDate = getLatestDate(angebot.termine);
  const inTheFuture = latestDate >= today;

  useEffect(() => {
    if (angebot.hintergrund == "dark") setStyle(dark);
    if (angebot.hintergrund == "hell") setStyle(hell);
    if (angebot.hintergrund == "blurDark") setStyle(blurDark);
    if (angebot.hintergrund == "blurLight") setStyle(blurLight);
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
      >
        <div>
          <div className="headerWrapper" style={style}>
            <div className="slideWrapper">
              <h2 className="singleCategory">{angebot?.kategorie}</h2>
              <h1 className="singleHeadline">{angebot.title}</h1>
              {angebot?.hintergrund == "blur" && (
                <Image src={angebot?.blurImageUrl} fill objectFit="cover" />
              )}
            </div>
          </div>
          <div className="singleContentSpacer"></div>
          <div className="singleContent">
            <div className="introText">
              <PortableText value={angebot.descriptionShort} />
            </div>
            <div className="singleBody">
              <div className="singleBodyText">
                <PortableText value={angebot.description} />
              </div>
              <div className="singleBodyData">
                {(inTheFuture || angebot?.kategorie == "Webinar") && (
                  <div className="singleBodyPrice">{angebot.preis + " €"}</div>
                )}

                <div className="singleBodyDates">
                  {inTheFuture &&
                    angebot.termine.map((termin, i) => (
                      <div key={i}>
                        {formatDateDE(termin?.date)} / {termin?.start} —{" "}
                        {termin?.ende} Uhr
                      </div>
                    ))}
                </div>
                <div
                  className="disclaimer"
                  style={{ width: "100%", marginTop: "var(--space-S)" }}
                >
                  {inTheFuture && angebot?.kategorie !== "Webinar" && (
                    <p>
                      <span className="termine">
                        {numbersDE[angebot?.termine.length]}
                      </span>
                      {angebot?.zoom && " per Zoom"}{" "}
                      {angebot?.aufzeichnung &&
                        " mit danach versendeter Aufzeichnung für zeitliche Flexibilität."}
                    </p>
                  )}
                  <p>
                    Alle Käufe sind final, kein Umtausch oder Erstattung
                    möglich.
                  </p>
                </div>
              </div>
              <div className="singleBodyButton">
                {angebot?.kategorie == "Webinar" && (
                  <Button value={"Jetzt kaufen"} href={angebot?.buchungsLink} />
                )}

                {angebot?.kategorie !== "Webinar" && inTheFuture && (
                  <Button value={"Jetzt buchen"} href={angebot?.buchungsLink} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="singlePersons">
          {angebot?.personen?.map((person, i) => (
            <div
              className="singlePerson"
              key={i}
              style={{ flexDirection: i % 2 !== 0 ? "row-reverse" : "row" }}
            >
              <div className="singlePersonInfo">
                <div className="singlePersonInfoInner">
                  <h3>{person?.rolle}</h3>
                  <h1>{person?.name}</h1>
                  <PortableText value={person?.textKurz} />
                  <div className="singlePersonLink">
                    <Link
                      href={`/personen?person=${person?.slug.current}`}
                      scroll={false}
                    >
                      <h2>Mehr infos →</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="singlePersonImg">
                <Image
                  src={person?.portrait?.url.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={75}
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="singleWeitere">
          <h2 className="singleWeitereHead">Weitere Angebote</h2>
          {angebote.map(
            (entry, i) =>
              i <= 2 && (
                <div key={i}>
                  <AngebotRow
                    angebot={entry}
                    locale={locale}
                    fromSingle={true}
                  />
                </div>
              )
          )}
          <h2 className="singleWeitereHead borderTop">
            <Link href={"/kalender"} scroll={false}>
              Alle Angebote ({angebote.length + 1})
            </Link>
          </h2>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AngebotSingle;
