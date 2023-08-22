'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import Link from 'next/link';

const getData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/promotions?populate=*`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    return;
  }
};

const servicesData = [
  {
    subheading: 'Get a unique feeling',
    title: 'Discover Amazing and Luxurious Yachts1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolore magna aliqua.',
    bgimg: '/assets/home/bannerservicebg1.png',
    mainimg: '/assets/home/bannerservice1.png',
  },
  {
    subheading: 'Get a unique feeling',
    title: 'Discover Amazing and Luxurious Yachts2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolore magna aliqua.',
    bgimg: '/assets/home/bannerservicebg1.png',
    mainimg: '/assets/home/bannerservice1.png',
  },
  {
    subheading: 'Get a unique feeling',
    title: 'Discover Amazing and Luxurious Yachts3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolore magna aliqua.',
    bgimg: '/assets/home/bannerservicebg1.png',
    mainimg: '/assets/home/bannerservice1.png',
  },
  {
    subheading: 'Get a unique feeling',
    title: 'Discover Amazing and Luxurious Yachts4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolore magna aliqua.',
    bgimg: '/assets/home/bannerservicebg1.png',
    mainimg: '/assets/home/bannerservice1.png',
  },
];

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
    <div className="w-screen relative px-5 py-[42px] max-h-none md:max-h-[600px]">
      {/* Overlay */}
      <div className="absolute inset-0 ">
        <Image
          src={servicesData[slideNumber].bgimg}
          fill
          alt="Somthing"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute inset-0 z-10 opacity-60 bg-[#142f39]"></div>
      </div>

      {/* Swiper */}
      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
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
                    href={'#'}
                    className="border border-solid border-white px-6 py-2 w-fit text-white"
                  >
                    Book Now
                  </Link>
                </div>
                <div className="order-1 md:order-2 relative">
                  <Image
                    src={item.attributes.image.data.attributes.url}
                    width={427}
                    height={464}
                    alt={item.title}
                    style={{
                      objectFit: 'cover',
                      display: 'block',
                      marginInline: 'auto',
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
