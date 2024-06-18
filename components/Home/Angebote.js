"use client";

import React, { useRef } from "react";
import AngebotKachel from "../Angebote/AngebotKachel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Angebote = ({ content, locale }) => {
  const today = new Date();

  const futureContent = content.filter((entry) =>
    entry.termine.some((termin) => new Date(termin.date) > today)
  );

  const swiperRef = useRef(null);

  const handleSlideClick = (index) => {
    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="homeSectionWrapper">
      <h3 style={{ width: "100%", textAlign: "center" }}>Aktuelle Angebote</h3>
      <div className="homeAngeboteWrapper">
        <Swiper
          spaceBetween={1}
          slidesPerView={3.2}
          centeredSlides={true}
          initialSlide={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {futureContent.map(
            (entry, i) =>
              i <= 5 && (
                <SwiperSlide key={i}>
                  <span onClick={() => handleSlideClick(i)}>
                    <AngebotKachel angebot={entry} locale={locale} />
                  </span>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
      <div className="homeAngeboteWrapperMobile">
        <Swiper
          spaceBetween={1}
          slidesPerView={1.2}
          centeredSlides={true}
          initialSlide={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {futureContent.map(
            (entry, i) =>
              i <= 5 && (
                <SwiperSlide key={i}>
                  <span onClick={() => handleSlideClick(i)}>
                    <AngebotKachel angebot={entry} locale={locale} />
                  </span>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Angebote;
