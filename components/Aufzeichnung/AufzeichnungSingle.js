"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const variants = {
  hidden: { opacity: 1, y: 1000 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

const AngebotSingle = ({ angebot, angebote, slug, locale }) => {
  const [password, setPassword] = useState("");
  const [showContent, setShowContent] = useState("");
  const key = usePathname();

  const getLatestDate = (termine) =>
    termine.reduce(
      (latest, termin) =>
        new Date(termin.date) > latest ? new Date(termin.date) : latest,
      new Date(termine[0].date)
    );

  const today = new Date();
  const latestDate = getLatestDate(angebot.termine);
  const inTheFuture = latestDate >= today;

  const dark = { background: "var(--dark)", color: "var(--light)" };
  const hell = { background: "var(--light)", color: "var(--dark)" };
  const blur = {
    backgroundSize: "cover",
    backgroundImage: `url(${angebot?.blurImageUrl})`,
    color: "var(--light)",
  };

  useEffect(() => {
    password == angebot.password && setShowContent(true);
  }, [password]);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  console.log(angebot.aufzeichnungsLink);

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
          <div
            className="headerWrapper"
            style={
              angebot?.kategorie == "Seminar"
                ? blur
                : angebot?.kategorie == "Ausbildung"
                  ? dark
                  : hell
            }
          >
            <div className="slideWrapper">
              <h2 className="singleCategory">
                {angebot?.kategorie}{" "}
                {!inTheFuture && angebot?.aufzeichnung && " (Aufzeichnung)"}
              </h2>
              <h1 className="singleHeadline">{angebot.title}</h1>
              {angebot?.hintergrund == "blur" && (
                <Image src={angebot?.blurImageUrl} fill objectFit="cover" />
              )}
            </div>
          </div>
          <div className="singleContentSpacer"></div>
          <div className="singleContent">
            {!showContent ? (
              <div className="newsletterSignup password">
                <input
                  placeholder="Passwort"
                  type="text"
                  value={password}
                  onChange={handleChange}
                />
                <p>
                  Bitte setze hier das von uns bereitgestellte Passwort ein um
                  die Aufzeichnung abzurufen.
                </p>
              </div>
            ) : (
              <div className="embedContainer">
                <iframe
                  src={`https://player.vimeo.com/video/${angebot.aufzeichnungsLink}`}
                  width="640"
                  height="360"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                  title="Vimeo Video"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AngebotSingle;
