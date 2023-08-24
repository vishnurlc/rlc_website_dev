'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from 'swiper/modules';

import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

import Link from 'next/link';

const getData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/promotions?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    return;
  }
};

const ServicesBanner = () => {
  const [data, setData] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen relative px-5 py-[42px] overflow-hidden ">
      <AnimatePresence mode="popLayout">
        {data[slideNumber] && (
          <motion.div
            className="absolute inset-0 "
            key={slideNumber}
            initial={{
              scale: 1,
              opacity: 0.8,
            }}
            animate={{
              scale: 1.2,
              opacity: 1,
            }}
            exit={{
              scale: 1.4,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <Image
              src={
                data[slideNumber]?.attributes.bgimage.data.attributes.formats
                  .medium.url ||
                data[slideNumber]?.attributes.bgimage.data.attributes.url ||
                '/assets/home/bannerservicebg1.png'
              }
              fill
              alt="Banner Service Bg"
              style={{
                objectFit: 'cover',
              }}
            />
            <div className="absolute inset-0 z-10 opacity-60 bg-[#142f39]"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Swiper */}
      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: true,
          // }}
          speed={1500}
          navigation={true}
          onSlideChange={(obj) => setSlideNumber(obj.activeIndex)}
          className="max-w-[1500px] mx-auto"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto ">
                <div className="py-2 order-2 md:order-1 flex flex-col gap-5 pt-4 md:pt-12 font-inter md:px-[50px]">
                  <span className="text-[#3DB7CD] font-medium text-sm">
                    {item.attributes.subheading}
                  </span>
                  <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">
                    {item.attributes.heading}
                  </h2>
                  <p className="text-grey font-light text-sm">
                    {item.attributes.description}
                  </p>
                  <Link
                    href={`https://wa.me/${process.env.WHATSAPP_NUMBER}?text=Hi, I would like to know about your services?`}
                    target="_blank"
                    className="border border-solid border-white px-6 py-2 w-fit text-white"
                  >
                    Book Now
                  </Link>
                </div>
                <div className="order-1 md:order-2 relative w-full h-full">
                  <Image
                    src={item.attributes.image.data.attributes.url}
                    width={427}
                    height={464}
                    alt={item.title}
                    style={{
                      objectFit: 'cover',
                      display: 'block',
                      marginInline: 'auto',
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '1',
                      maxWidth: '427px',
                      borderRadius: '5px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesBanner;
