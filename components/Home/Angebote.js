"use client";

import React, { useRef } from "react";
import AngebotKachel from "../Angebote/AngebotKachel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Angebote = ({ content, locale }) => {

  const getFirstFutureDateTime = (termine) => {
    if (!Array.isArray(termine)) return null;

    const now = new Date();

    return termine.find((termin) => {
      const dateTimeString = `${termin.date}T${termin.start}:00`;
      const dateTime = new Date(dateTimeString);
      return dateTime >= now;
    });
  };

  const futureContent = content.filter((entry) =>
    getFirstFutureDateTime(entry.termine)
  );

  const swiperRefDesktop = useRef(null);
  const swiperRefTablet = useRef(null);
  const swiperRefMobile = useRef(null);

  const handleSlideClick = (index, swiperRef) => {
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
            swiperRefDesktop.current = swiper;
          }}
        >
          {futureContent.map(
            (entry, i) =>
              i <= 5 && (
                <SwiperSlide key={i}>
                  <span onClick={() => handleSlideClick(i, swiperRefDesktop)}>
                    <AngebotKachel angebot={entry} locale={locale} />
                  </span>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>

      <div className="homeAngeboteWrapperTablet">
        <Swiper
          spaceBetween={1}
          slidesPerView={2}
          centeredSlides={true}
          onSwiper={(swiper) => {
            swiperRefTablet.current = swiper;
          }}
        >
          {futureContent.map(
            (entry, i) =>
              i <= 5 && (
                <SwiperSlide key={i}>
                  <span onClick={() => handleSlideClick(i, swiperRefTablet)}>
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
          onSwiper={(swiper) => {
            swiperRefMobile.current = swiper;
          }}
        >
          {futureContent.map(
            (entry, i) =>
              i <= 5 && (
                <SwiperSlide key={i}>
                  <span onClick={() => handleSlideClick(i, swiperRefMobile)}>
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
