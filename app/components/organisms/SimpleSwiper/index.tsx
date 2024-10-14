'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Autoplay } from 'swiper/modules';

export default function SimpleSwiper({ items }: { items: JSX.Element[] }) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="simpleSwiper">
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
