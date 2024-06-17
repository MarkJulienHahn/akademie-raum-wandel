"use client";

import React, { useEffect, useState } from "react";
import { Link } from "../../src/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { use100vh } from "react-div-100vh";

import NavEntry from "./NavEntry";

function removeFirstThreeCharacters(str) {
  str.length >= 3;
  return str.substring(3);
}

const menu = [
  { title: "Home", slug: "" },
  { title: "Kalender", slug: "kalender" },
  { title: "Angebote", slug: "angebote" },
  { title: "Akademie", slug: "akademie" },
  { title: "Personen", slug: "personen" },
  { title: "Kontakt", slug: "kontakt" },
];

const NavMobile = ({ locale }) => {
  const pathname = usePathname();
  const neutralPath = removeFirstThreeCharacters(pathname);
  const [top, setTop] = useState(true);
  const [active, setActive] = useState(false);

  const height = use100vh();

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
    <>
      <div
        className="navWrapper"
        style={{
          height: top ? "50px" : "40px",
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
              width={50}
              height={30}
              style={{
                left: top ? "4px" : "calc(50% - 20px)",
                transform: top
                  ? "scale(1.2) translateX(7px) translateY(5px)"
                  : "scale(1)",
              }}
            />
          </div>
          <div
            className="navLogo"
            style={{
              opacity: top ? 1 : 0,
            }}
          >
            <Image
              src={"/images/arw-logo-full.svg"}
              width={50}
              height={30}
              style={{
                transform: top
                  ? "scale(1.2) translateX(7px) translateY(5px)"
                  : "scale(1)",
              }}
            />
          </div>
        </Link>

        <div
          onClick={() => {
            setActive(!active);
          }}
        >
          Menu
        </div>
      </div>

      <div
        className="navMenuMobile"
        style={{
          height: height,
          transform: active ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        {menu.map((entry, i) => (
          <div
            key={i}
            onClick={() => {
              setActive(false);
            }}
          >
            <NavEntry entry={entry} neutralPath={neutralPath} />
          </div>
        ))}
      </div>
    </>
  );
};

export default NavMobile;
