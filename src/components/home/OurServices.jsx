'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CarouselSlide from './CarouselSlide';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Ourservices = () => {
  return (
    <div
      style={{
        background: "url('/assets/servicecarousel/bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="px-8 py-20  flex justify-center items-center"
    >
      <div>
        <div className="mb-10 md:mb-20 flex flex-col gap-6 md:gap-10 items-center justify-center ">
          <h2 className="uppercase font-inter text-base md:text-xl font-light text-gray">
            Our Services
          </h2>
          <div>
            <p className="text-white capitalize text-center font-inter font-normal text-sm md:text-2xl  mb-2 ">
              Take to the Skies: Private Jet Charters
            </p>
            <h3 className="text-gold text-center uppercase font-bold text-xl md:text-5xl font-sans  max-w-[80vw]">
              Your Exclusive Flight Awaits
            </h3>
          </div>
        </div>
        <div>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            pagination={{
              clickable: true,
              el: '.swiper-pagination-el',
              bulletActiveClass: 'serviceactivebullet',
              bulletClass: 'servicebullet',
            }}
            navigation={{
              nextEl: '.swiper-next-el',
              prevEl: '.swiper-prev-el',
            }}
            className="max-w-[1200px] mx-auto p-5"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 5,
              slideShadows: false,
            }}
            initialSlide={2}
          >
            {/* Add your service images here */}
            <SwiperSlide className="serviceslide">
              <CarouselSlide
                url={'/assets/servicecarousel/1.png'}
                title={'Testing the shit'}
                price={300}
              />
            </SwiperSlide>
            <SwiperSlide className="serviceslide">
              <CarouselSlide
                url={'/assets/servicecarousel/2.png'}
                title={'Testing the shit'}
                price={300}
              />
            </SwiperSlide>
            <SwiperSlide className="serviceslide">
              <CarouselSlide
                url={'/assets/servicecarousel/3.png'}
                title={'Testing the shit'}
                price={300}
              />
            </SwiperSlide>
            <SwiperSlide className="serviceslide">
              <CarouselSlide
                url={'/assets/servicecarousel/4.png'}
                title={'Testing the shit'}
                price={300}
              />
            </SwiperSlide>
            <SwiperSlide className="serviceslide">
              <CarouselSlide
                url={'/assets/servicecarousel/5.png'}
                title={'Testing the shit'}
                price={300}
              />
            </SwiperSlide>
          </Swiper>
          <div className="flex gap-5 justify-center items-center mt-20 ">
            <div className="swiper-prev-el">
              <BsArrowLeftCircle size={24} color="white" cursor={'pointer'} />
            </div>
            <div className="swiper-pagination-el !w-fit flex items-center"></div>
            <div className="swiper-next-el">
              <BsArrowRightCircle size={24} color="white" cursor={'pointer'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
