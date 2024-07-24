"use client";

import React, { useEffect, useState } from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
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
        modules={[EffectFade, Autoplay]}
        effect="fade"
        slidesPerView={1}
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={5000}
      >
        {content.introSlider.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slideWrapper">
              <Image
                src={slide.asset.url}
                fill
                style={{ objectFit: "cover" }}
                alt={`slide-${index}`}
                quality={50}
                priority={index == 0 ? "true" : "false"}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="headerContentWrapper">
        <div className={`headerContent ${scrollY > 200 ? "fadeOut" : ""}`}>
          <div
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
              <Button value={"Kalender"} internal={"kalender"} />
              <Button value={"Angebote"} internal={"angebote"} light={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
