'use client';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function GalleryCarouel({ data }) {
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="privatejetswiper"
        initialSlide={4}
      >
        <SwiperSlide>
          <Image
            src="/assets/privatejet/bannerimg.png"
            alt="Privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/privatejet/bannerimg.png"
            alt="Privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/privatejet/bannerimg.png"
            alt="Privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/privatejet/bannerimg.png"
            alt="Privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/privatejet/bannerimg.png"
            alt="Privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/privatejet/bannerimg.png"
            alt="Privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/privatejet/bannerimg.png"
            alt="Privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/privatejet/bannerimg.png"
            alt="Privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/privatejet/bannerimg.png"
            alt="Privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
