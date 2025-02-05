"use client";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselSlide from "./CarouselSlide";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { CardServices, Loader } from "..";
import { AnimatePresence, motion } from "framer-motion";
import ServiceCard2 from "./ServiceCard2";

const getData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/services?populate=*&sort=order:asc`,
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

const headingVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Ourservices = () => {
  const [data, setData] = useState([]);
  // const [slideIndex, setSlideIndex] = useState(data?.length / 2 || 2);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data?.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* varill ane */}
      {data.length > 0 ? <CardServices service={data} /> : "loading"}
      <div
      // style={{
      //   background: "url('/assets/servicecarousel/bg.png')",
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
      // className="px-4 py-20  bg-white"
      >
        {/* {data && ( */}
        {/* <div> */}
        {/* <div className="mb-10 md:mb-20 flex flex-col gap-6 md:gap-10 items-center justify-center "> */}
        {/* <h2 className="uppercase font-inter text-base md:text-3xl font-light text-grey">
        Our Services
      </h2> */}
        {/* <div className="relative w-full min-h-[56px] md:min-h-[88px]">
        <AnimatePresence>
          <motion.div
            className="w-full absolute flex flex-col items-center justify-center"
            variants={headingVariant}
            initial="initial"
            animate="animate"
            exit={'exit'}
            key={slideIndex}
            transition={{
              duration: 0.2,
            }}
          >
            <p className="text-white capitalize text-center font-inter font-normal text-sm md:text-2xl  mb-2 ">
              {data[slideIndex]?.attributes.heading}
            </p>
            <h3 className="text-gold text-center uppercase font-bold text-lg md:text-5xl font-sans  max-w-[80vw]">
              {data[slideIndex]?.attributes.subheading}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div> */}
        {/* </div> */}
        {/* 
            <div
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[350px]"
              id="services"
            >
              {data.length > 0 ? (
                <>
                  {data.map((service, index) => (
                    <ServiceCard2
                      key={index}
                      url={
                        service.attributes.image.data.attributes.formats.medium
                          .url || service.attributes.image.data.attributes.url
                      }
                      title={service.attributes.name}
                      price={service.attributes.price}
                      link={service.attributes.url}
                    />
                  ))}
                </>
              ) : (
                <div className="w-full flex justify-center items-center col-span-3">
                  <Loader />
                </div>
              )}
            </div> */}
        {/* <div className="min-h-[350px]">
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
            initialSlide={data?.length / 2}
          >
            {data.map((service, index) => (
              <SwiperSlide className="serviceslide" key={index}>
                <CarouselSlide
                  url={
                    service.attributes.image.data.attributes.formats
                      .medium.url ||
                    service.attributes.image.data.attributes.url
                  }
                  title={service.attributes.name}
                  price={service.attributes.price}
                  link={service.attributes.url}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-5 justify-center items-center mt-14 md:mt-20 ">
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
    </div> */}
        {/* </div> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Ourservices;
