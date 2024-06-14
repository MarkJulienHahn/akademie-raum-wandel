"use client";

import React, { useEffect, useState } from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Button from "../Button";

const Header = ({ content }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="headerWrapper">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        spaceBetween={30}
        slidesPerView={1}
      >
        {content.introSlider.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slideWrapper">
              <Image src={slide.asset.url} fill objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`headerContent ${scrollY > 200 ? "fadeOut" : ""}`}
        style={{
          transform: `translateY(${-scrollY / 4}px)`,
          opacity: 1 - scrollY / 200,
        }}
      >
        <h1>
          <PortableText value={content?.headline} />
        </h1>
        <PortableText value={content?.text} />

        <div className="headerButtonsWrapper">
          <Button value={"Kalender"} href={"kalender"} />
          <Button value={"Angebote"} href={"angebote"} light={true} />
        </div>
      </div>
    </div>
  );
};

export default Header;
