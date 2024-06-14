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
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 200) {
        setOpacity(0);
      } else {
        setOpacity(1 - scrollY / 200);
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
    <div className="navWrapper">
      <Link href="/" scroll={false}>
        <div className="navLogo">
          <Image src={"/images/arw-logo-short.svg"} width={60} height={40} />
        </div>
        <div className="navLogo" style={{ opacity: opacity, transition: "opacity 0.5s" }}>
          <Image src={"/images/arw-logo-full.svg"} width={60} height={40} />
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
        <Link href={`/${neutralPath}`} locale="de">
          <span style={locale == "de" ? active : inactive}>De</span>
        </Link>{" "}
        /{" "}
        <Link href={`/${neutralPath}`} locale="en">
          <span style={locale !== "de" ? active : inactive}>En</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
