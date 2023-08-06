import Image from 'next/image';
import React from 'react';

const servicesData = [
  {
    subheading: 'Get a unique feeling',
    title: 'Discover Amazing and Luxurious Yachts',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolore magna aliqua.',
    bgimg: '/assets/home/bannerservicebg1.png',
    mainimg: '/assets/home/bannerservice1.png',
  },
  {
    subheading: 'Get a unique feeling',
    title: 'Discover Amazing and Luxurious Yachts',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolore magna aliqua.',
    bgimg: '/assets/home/bannerservicebg1.png',
    mainimg: '/assets/home/bannerservice1.png',
  },
  {
    subheading: 'Get a unique feeling',
    title: 'Discover Amazing and Luxurious Yachts',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolore magna aliqua.',
    bgimg: '/assets/home/bannerservicebg1.png',
    mainimg: '/assets/home/bannerservice1.png',
  },
  {
    subheading: 'Get a unique feeling',
    title: 'Discover Amazing and Luxurious Yachts',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolore magna aliqua.',
    bgimg: '/assets/home/bannerservicebg1.png',
    mainimg: '/assets/home/bannerservice1.png',
  },
];

const ServicesBanner = () => {
  return (
    <div className="w-screen relative px-5 md:py-[42px] max-h-[578px]">
      {/* Overlay */}
      <div className="absolute inset-0 ">
        <Image
          src={servicesData[0].bgimg}
          fill
          alt="Somthing"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute inset-0 z-10 opacity-60 bg-[#142f39]"></div>
      </div>

      {/* Swiper */}

      <div className="grid grid-cols-2 ">
        <div></div>
      </div>
    </div>
  );
};

export default ServicesBanner;
