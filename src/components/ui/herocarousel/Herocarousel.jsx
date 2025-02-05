'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function HeroCarousel({ data, name }) {
  return (
    <div className="relative">
      {data && (
        <Swiper
          className="herocarousel"
          fadeEffect={{
            crossFade: true,
          }}
          speed={1000}
          effect={'fade'}
          freeMode
          loop
          modules={[EffectFade, Navigation, Autoplay]}
          navigation={{
            nextEl: '.hero-carousel__button--right',
            prevEl: '.hero-carousel__button--left',
          }}
        >
          {data.data.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.attributes.url}
                fill
                alt={name || 'Richy Life Club'}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="z-10 absolute left-8 bottom-6 flex gap-6 items-center ">
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="hero-carousel__button--right w-10 h-10 rounded-full  flex items-center justify-center text-white cursor-pointer border-2 border-solid border-gold"
        >
          <BiChevronLeft size={28} color="#DCA24B" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="hero-carousel__button--left w-10 h-10 rounded-full  flex items-center justify-center text-white cursor-pointer border-2 border-solid border-gold"
        >
          <BiChevronRight size={28} color="#DCA24B" />
        </motion.div>
      </div>
    </div>
  );
}
