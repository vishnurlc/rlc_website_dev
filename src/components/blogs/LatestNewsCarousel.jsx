'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LatestNewsCarousel = ({ blogs }) => {
  const datas = blogs.data.filter((blog) => blog.attributes.latest);
  return (
    <div className="relative">
      <Swiper
        className="herocarousel rounded-lg"
        speed={1500}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        loop
        spaceBetween={30}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.hero-carousel__button--right',
          prevEl: '.hero-carousel__button--left',
        }}
      >
        {datas.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={item.attributes.image.data.attributes.formats.medium.url}
              fill
              alt={item.attributes.heading}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              sizes="100vw"
            />
            <div className="absolute w-3/4 rounded-sm text-white px-4 py-2 z-10 left-5 bottom-0 md:top-1/2 translate-y-0 md:-translate-y-1/2 backdrop-blur-sm">
              <h2 className="uppercase font-bold font-inter text-base sm:text-xl md:text-4xl">
                {item.attributes.heading}
              </h2>
              <p className="hidden sm:block md:text-xl font-extralight mt-2 font-inter">
                {item.attributes.subheading}
              </p>
              <motion.button className="px-6 py-2 mt-3 md:mt-6 hover:scale-105 transition-all bg-primary text-white rounded-sm">
                <Link href={`/blogs/${item.attributes.slug}`}>Read more</Link>
              </motion.button>
            </div>
            <div className="absolute inset-0 select-none z-0 bg-black bg-opacity-40"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-10 absolute left-8 bottom-6 md:flex gap-6 items-center hidden ">
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="hero-carousel__button--right w-10 h-10 rounded-full  flex items-center justify-center text-white cursor-pointer border border-solid border-white"
        >
          <BiChevronLeft size={28} color="#fff" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="hero-carousel__button--left w-10 h-10 rounded-full  flex items-center justify-center text-white cursor-pointer border border-solid border-white"
        >
          <BiChevronRight size={28} color="#fff" />
        </motion.div>
      </div>
    </div>
  );
};

export default LatestNewsCarousel;
