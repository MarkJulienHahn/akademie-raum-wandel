"use client";

import React, { useEffect, useState } from "react";
import { Link } from "../../src/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

import NavEntry from "./NavEntry";

function removeFirstThreeCharacters(str) {
  str.length >= 3;
  return str.substring(3);
}

const active = { opacity: 1 };
const inactive = { opacity: 0.3 };

const menu = [
  { title: "Home", slug: "" },
  { title: "Kalender", slug: "kalender" },
  { title: "Angebote", slug: "angebote" },
  { title: "Akademie", slug: "akademie" },
  { title: "Personen", slug: "personen" },
  { title: "Kontakt", slug: "kontakt" },
];

const Nav = ({ locale }) => {
  const pathname = usePathname();
  const neutralPath = removeFirstThreeCharacters(pathname);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 200) {
        setTop(false);
      } else {
        setTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0 }), 200);
  }, [pathname]);

  return (
    <div
      className="navWrapper"
      style={{
        height: top ? "90px" : "60px",
        transition: "all 0.5s",
        fontSize: top ? "var(--fontSize-S)" : "var(--fontSize-XS)",
        letterSpacing: top
          ? "var(--letterSpacing-S)"
          : "var(--letterSpacing-S)",
      }}
    >
      <Link href="/" scroll={false}>
        <div className="navLogo">
          <Image
            src={"/images/arw-logo-short.svg"}
            width={60}
            height={50}
            style={{
              transform: top
                ? "scale(1.5) translateX(13px) translateY(10px)"
                : "scale(1)",
            }}
          />
        </div>
        <div className="navLogo" style={{ opacity: top ? 1 : 0 }}>
          <Image
            src={"/images/arw-logo-full.svg"}
            width={60}
            height={50}
            style={{
              transform: top
                ? "scale(1.5) translateX(13px) translateY(10px)"
                : "scale(1)",
            }}
          />
        </div>
      </Link>

      <div className="navMenu">
        {menu.map((entry, i) => (
          <span key={i}>
            <NavEntry entry={entry} neutralPath={neutralPath} />
          </span>
        ))}
      </div>
      <div className="navLocale">
        <NavEntry
          entry={{ title: "FAQs", slug: "faq" }}
          neutralPath={neutralPath}
        />
        {/* <Link href={`/${neutralPath}`} locale="de">
          <span style={locale == "de" ? active : inactive}>De</span>
        </Link>{" "}
        /{" "}
        <Link href={`/${neutralPath}`} locale="en">
          <span style={locale !== "de" ? active : inactive}>En</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;
