'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

import { EffectCoverflow, Navigation } from 'swiper/modules';

export default function ProfileSwiper({ items }: { items: JSX.Element[] }) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        loop
        navigation
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Navigation]}
        className="ProfileSwiper">
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
