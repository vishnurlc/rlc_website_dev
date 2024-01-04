import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

const SwiperSlider = ({ fleetData }) => {
  return (
    <Swiper
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3, // for big screens
        },
      }}
    >
      {fleetData?.map((item, index) => (
        <SwiperSlide key={index}>
          {fleetData?.map((item, index) => (
            <div key={index} id="selectDisable">
              <div className="relative  w-full min-w-[297px] aspect-[357/200] rounded-md">
                <Link
                  href={`/chauffeur-service/#${item.attributes.slug}`}
                  className="select-none"
                  draggable="false"
                >
                  <Image
                    src={item.attributes.image?.data.attributes.url}
                    alt={`${item.name} rental | Richy life Club`}
                    fill
                    style={{
                      objectFit: 'contain',
                      userSelect: 'none !important',
                    }}
                    id="selectDisable"
                    draggable="false"
                  />
                </Link>
              </div>
              <h2 className="uppercase text-center font-medium tracking-wide text-sm md:text-xl font-poppins">
                {item.attributes.name}
              </h2>
            </div>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
