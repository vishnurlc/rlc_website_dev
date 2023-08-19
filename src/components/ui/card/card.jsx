'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../button/Button';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  BsWhatsapp,
  BsPeople,
  BsFillFuelPumpFill,
  BsCarFrontFill,
} from 'react-icons/bs';
import { PiStarFill } from 'react-icons/pi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { IoMdPhotos } from 'react-icons/io';
import { LiaToolsSolid, LiaRulerCombinedSolid } from 'react-icons/lia';
import { BiBadgeCheck, BiCategoryAlt, BiSolidColor } from 'react-icons/bi';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ModalComponent, VideoPlayer } from '@/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Card({ variant, data }) {
  const [open, setOpen] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const path = usePathname();

  return (
    <>
      <div className="grid grid-cols-1 w-full lg:grid-cols-5  max-w-[1200px] rounded-sm overflow-hidden mx-auto bg-[#fbfbfb]">
        <div className="col-span-3 relative w-full aspect-[2/1] min-h-[220px] ">
          <Image
            src={data.attributes.image.data[0].attributes.url}
            alt={data.attributes.name}
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
              <IoMdPhotos />
              {data.attributes.image.data.length} Photo
            </button>
          </div>
        </div>
        <div className="p-5 col-span-1 md:col-span-2">
          <div className="text-black h-full flex flex-col items-start justify-between">
            <h3 className="text-primary text-2xl font-bold leading-[29.04px]">
              <Link href={`${path}/${data.attributes.slug}`}>
                {data.attributes.name}
              </Link>
              {variant === 'yacht' && (
                <p className="text-gray-500 text-base font-normal">
                  {data.attributes.make.data.attributes.make}
                </p>
              )}
            </h3>
            {/* <p className="py-2 flex gap-1 items-center ">
              {[1, 2, 3, 4, 5].map((index) => (
                <PiStarFill
                  key={index}
                  className={
                    index <= data.attributes.rating
                      ? 'text-primary'
                      : 'text-gray-400'
                  }
                />
              ))}
              <span className="ml-2 text-secondary text-xs">
                {data.attributes.rating}.00 rating
              </span>
            </p> */}
            {variant === 'car' ? (
              <CarDetail data={data} />
            ) : (
              <YachtDetail data={data} />
            )}

            {/* <p className="text-secondary text-base font-normal leading-relaxed">
              {data.attributes.short_description}
            </p> */}

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full py-5 gap-6">
              <div className="flex items-center gap-2">
                {/* <p className="text-secondary text-sm">From</p> */}
                <span className="text-primary font-normal text-2xl">
                  AED{data.attributes.price}{' '}
                  <span className="text-secondary text-sm font-normal">
                    /Day
                  </span>
                </span>
              </div>
              <div className="flex justify-start items-center gap-2 ">
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
            <VideoPlayer url={data.attributes.video_url} />
          ) : (
            <Carousel
              data={data.attributes.image.data}
              name={data.attributes.name}
            />
          )}
        </div>
      </ModalComponent>
    </>
  );
}

function Carousel({ data, name }) {
  return (
    <Swiper modules={[Navigation]} navigation className="product_swiper">
      {data.map((e, index) => (
        <SwiperSlide key={`slide${index}`}>
          <Image
            src={e.attributes.formats.medium?.url || e.attributes.url}
            fill
            priority
            alt={name}
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

function YachtDetail({ data }) {
  return (
    <>
      <div className="py-3 flex gap-5 flex-wrap">
        <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
          <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
            <BiBadgeCheck /> {data.attributes.technicalspec.star} Star
          </div>
        </div>
        <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
          <div className="text-primary text-base flex items-center gap-2 font-medium leading-tight">
            <BsPeople /> {data.attributes.technicalspec.capacity} People
          </div>
        </div>
        <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
          <div className="text-primary text-base flex items-center gap-2 font-medium leading-tight">
            <BiCategoryAlt /> {data.attributes.technicalspec.category}
          </div>
        </div>

        <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
          <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
            <LiaToolsSolid /> {data.attributes.technicalspec.make_year}
          </div>
        </div>
        <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
          <div className="text-primary text-base font-medium flex items-center gap-2 leading-tight">
            <LiaRulerCombinedSolid /> {data.attributes.technicalspec.length}
            &quot;ft
          </div>
        </div>
      </div>
    </>
  );
}

function CarDetail({ data }) {
  return (
    <div className="py-3 flex gap-5 flex-wrap">
      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
          <BsFillFuelPumpFill /> {data.attributes.fuel.data.attributes.type}
        </div>
      </div>
      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-base flex items-center gap-2 font-medium leading-tight">
          <MdOutlineAirlineSeatReclineExtra />{' '}
          {data.attributes.seat.data.attributes.seat} Seats
        </div>
      </div>

      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
          <LiaToolsSolid /> {data.attributes.year.data.attributes.year}
        </div>
      </div>
      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-base font-medium flex items-center gap-2 leading-tight">
          <BsCarFrontFill /> {data.attributes.body.data.attributes.type}
        </div>
      </div>
      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-base font-medium flex items-center gap-2 leading-tight">
          <BiSolidColor /> {data.attributes.car_color.data.attributes.color}
        </div>
      </div>
    </div>
  );
}
export default Card;
