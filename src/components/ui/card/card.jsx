'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../button/Button';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsWhatsapp, BsPeople } from 'react-icons/bs';
import { PiStarThin } from 'react-icons/pi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { IoMdPhotos } from 'react-icons/io';
import { LiaToolsSolid, LiaRulerCombinedSolid } from 'react-icons/lia';
import { BiBadgeCheck } from 'react-icons/bi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ModalComponent, VideoPlayer } from '@/components';

function Card() {
  const [open, setOpen] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 w-full md:grid-cols-3  max-w-[1200px] rounded-md mx-auto bg-[#fbfbfb]">
        <div className="col-span-1 relative h-full  aspect-square max-h-[380px] w-full">
          <Image
            src="/assets/privatejet/1.png"
            alt="privatejet"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div className="absolute inset-0 flex text-[#6A7285] font-sans text-xs items-end p-5 gap-4 z-10">
            <button
              onClick={() => {
                setOpen(true);
                setVideoModal(true);
              }}
              className="flex gap-1 items-center p-2 bg-white bg-opacity-80 rounded"
            >
              <AiOutlinePlayCircle />
              View Video
            </button>
            <button
              onClick={() => {
                setOpen(true);
                setVideoModal(false);
              }}
              className="flex gap-1 items-center p-2 bg-white bg-opacity-80 rounded"
            >
              <IoMdPhotos />5 Photo
            </button>
          </div>
        </div>
        <div className="p-5 col-span-1 md:col-span-2">
          <div className="text-black h-full flex flex-col items-start justify-between">
            <h3 className="text-primary text-2xl font-bold leading-[29.04px]">
              Pershing 2018 Yacht
            </h3>
            <p className="py-2 flex gap-1 items-center ">
              <PiStarThin />
              <PiStarThin />
              <PiStarThin />
              <PiStarThin />
              <PiStarThin />
              <span className="text-secondary text-xs">(5.00 rating)</span>
            </p>

            <div className="py-3 flex gap-5 flex-wrap">
              <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
                <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
                  <BiBadgeCheck /> 4 Star
                </div>
              </div>
              <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
                <div className="text-primary text-base flex items-center gap-2 font-medium leading-tight">
                  <BsPeople /> 19 People
                </div>
              </div>

              <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
                <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
                  <LiaToolsSolid /> 2016
                </div>
              </div>
              <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
                <div className="text-primary text-base font-medium flex items-center gap-2 leading-tight">
                  <LiaRulerCombinedSolid /> 30&quot;ft
                </div>
              </div>
            </div>

            <p className="text-secondary text-base font-normal leading-relaxed">
              Pershing 2014 Yacht is a stylish-looking sailing yacht, 30
              features a blister-type
              <br />
              coach roof, but with a much lower, sleeker profile.
            </p>

            <div className="flex justify-between w-full py-5">
              <div>
                <p className="text-secondary text-sm">From</p>
                <p className="text-primary font-normal text-xl">
                  $200{' '}
                  <span className="text-secondary text-sm font-normala">
                    /Day
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <FaPhoneAlt className="text-lg mx-3" />
                <BsWhatsapp className="text-xl mx-3" />
                <Button>Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalComponent open={open} setOpen={setOpen}>
        <div className="h-[50vh] max-h-[500px]">
          {videoModal ? (
            <VideoPlayer url={'https://www.youtube.com/watch?v=XZnuFdUPIzE'} />
          ) : (
            <Carousel />
          )}
        </div>
      </ModalComponent>
    </>
  );
}

function Carousel() {
  const serviceCarousel = [
    { slug: 'ss', source: '/assets/test/jet.png' },
    { slug: 'ss', source: '/assets/test/jet.png' },
    { slug: 'ss', source: '/assets/test/porch.jpg' },
  ];
  return (
    <Swiper modules={[Navigation]} navigation className="product_swiper">
      {serviceCarousel.map((e, index) => (
        <SwiperSlide key={`slide${index}`}>
          <Image
            src={e.source}
            fill
            priority
            alt="car"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Card;
