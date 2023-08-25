'use client';
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CarouselSlide from './CarouselSlide';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Loader } from '..';

const getData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/services?populate=*`,
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

const Ourservices = () => {
  const [data, setData] = useState([]);
  const [slideIndex, setSlideIndex] = useState(data.length / 2 || 2);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data.data);
    };
    fetchData();
  }, []);

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
          <h2 className="uppercase font-inter text-base md:text-xl font-light text-grey">
            Our Services
          </h2>
          <div>
            <p className="text-white capitalize text-center font-inter font-normal text-sm md:text-2xl  mb-2 ">
              {data[slideIndex]?.attributes.heading}
            </p>
            <h3 className="text-gold text-center uppercase font-bold text-xl md:text-5xl font-sans  max-w-[80vw]">
              {data[slideIndex]?.attributes.subheading}
            </h3>
          </div>
        </div>
        <div>
          {data.length > 0 ? (
            <>
              <Swiper
                effect="coverflow"
                grabCursor={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                centeredSlides={true}
                // loop={true}
                slidesPerView="auto"
                onSlideChange={(obj) => setSlideIndex(obj.activeIndex)}
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
                className="max-w-[1200px] mx-auto p-5 serviceswiper"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 300,
                  modifier: 5,
                  slideShadows: false,
                }}
                initialSlide={data.length / 2}
              >
                {data.map((service, index) => (
                  <SwiperSlide className="serviceslide" key={index}>
                    <CarouselSlide
                      url={
                        service.attributes.image.data.attributes.formats.medium
                          .url || service.attributes.image.data.attributes.url
                      }
                      title={service.attributes.name}
                      price={service.attributes.price}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex gap-5 justify-center items-center mt-20 ">
                <div className="swiper-prev-el">
                  <BsArrowLeftCircle
                    size={24}
                    color="white"
                    cursor={'pointer'}
                  />
                </div>
                <div className="swiper-pagination-el !w-fit flex items-center"></div>
                <div className="swiper-next-el">
                  <BsArrowRightCircle
                    size={24}
                    color="white"
                    cursor={'pointer'}
                  />
                </div>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
