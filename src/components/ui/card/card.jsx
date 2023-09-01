'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../button/Button';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsPeople, BsCarFrontFill, BsFillFuelPumpFill } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiOutlinePlayCircle,
} from 'react-icons/ai';
import { IoMdPhotos } from 'react-icons/io';
import { LiaToolsSolid, LiaRulerCombinedSolid } from 'react-icons/lia';
import { BiBadgeCheck, BiCategoryAlt, BiSolidColor } from 'react-icons/bi';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CustomVideoPlayer, ModalComponent } from '@/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCurrency } from '@/context/currencyContext';
function Card({ variant, data }) {
  const [open, setOpen] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const { selectedCurrency, conversionRates } = useCurrency();
  const path = usePathname();

  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat('ae', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
          />
          {/* <div className="absolute inset-0 flex text-[#6A7285] font-sans text-xs items-end p-5 gap-4 z-10">
            {data.attributes.video_url && (
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
            )}
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
          </div> */}
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
              <div className="w-full md:w-fit">
                {/* <p className="text-secondary text-sm">From</p> */}
                <span className="text-primary font-normal text-2xl">
                  {convertPrice(data.attributes.price)}{' '}
                  <span className="text-secondary text-sm font-normal">
                    {variant === 'car' ? '/Day' : '/hour'}
                  </span>
                </span>
                {variant === 'car' && (
                  <span className="text-primary text-xs">
                    {data.attributes.deposit.data && (
                      <div className="text-primary flex items-center gap-1  font-medium leading-tight">
                        {data.attributes.deposit.data?.attributes.type ===
                        'No Deposit' ? (
                          <>
                            <AiOutlineCheckCircle />{' '}
                            {data.attributes.deposit.data?.attributes.type}
                          </>
                        ) : (
                          <>
                            <AiOutlineExclamationCircle /> Deposit:&nbsp;
                            {convertPrice(
                              data.attributes.deposit.data.attributes.type
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </span>
                )}
              </div>
              <div className="flex justify-between md:justify-start items-center gap-4 w-full md:w-fit">
                <div className="flex gap-4 ">
                  <Link
                    href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                    className="cursor-pointer"
                  >
                    <FaPhoneAlt size={24} color="#DCA24B" />
                  </Link>
                  <Link
                    className="cursor-pointer"
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I would like to know more about ${data.attributes.name} booking`}
                  >
                    <RiWhatsappFill size={24} color="#25D366" />
                  </Link>
                </div>
                <Button
                  msg={`I would like to know more about ${data.attributes.name} booking`}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalComponent open={open} setOpen={setOpen}>
        <div className="h-[50vh] max-h-[500px]">
          {videoModal ? (
            <CustomVideoPlayer url={data.attributes.video_url} />
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
            className="object-contain"
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
          <div className="text-primary flex items-center gap-2 text-sm md:text-base font-medium leading-tight">
            <BiBadgeCheck /> {data.attributes.technicalspec.star} Star
          </div>
        </div>
        <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
          <div className="text-primary text-sm md:text-base flex items-center gap-2 font-medium leading-tight">
            <BsPeople /> {data.attributes.technicalspec.capacity} People
          </div>
        </div>
        <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
          <div className="text-primary text-sm md:text-base flex items-center gap-2 font-medium leading-tight">
            <BiCategoryAlt /> {data.attributes.technicalspec.category}
          </div>
        </div>

        <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
          <div className="text-primary flex items-center gap-2 text-sm md:text-base font-medium leading-tight">
            <LiaToolsSolid /> {data.attributes.technicalspec.make_year}
          </div>
        </div>
        <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
          <div className="text-primary text-sm md:text-base font-medium flex items-center gap-2 leading-tight">
            <LiaRulerCombinedSolid /> {data.attributes.technicalspec.length}
            &quot;ft
          </div>
        </div>
      </div>
    </>
  );
}

function CarDetail({ data }) {
  const { selectedCurrency, conversionRates } = useCurrency();

  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat('ae', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };
  return (
    <div className="py-3 flex gap-5 flex-wrap">
      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
          <BsFillFuelPumpFill /> {data.attributes.fuel.data.attributes.type}
        </div>
      </div>
      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-sm md:text-base flex items-center gap-2 font-medium leading-tight">
          <MdOutlineAirlineSeatReclineExtra />{' '}
          {data.attributes.seat.data.attributes.seat} Seats
        </div>
      </div>

      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-sm md:text-base font-medium leading-tight">
          <LiaToolsSolid /> {data.attributes.year.data.attributes.year}
        </div>
      </div>
      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-sm md:text-base font-medium flex items-center gap-2 leading-tight">
          <BsCarFrontFill /> {data.attributes.body.data.attributes.type}
        </div>
      </div>
      <div className="px-2 h-[37.19px] bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-sm md:text-base font-medium flex items-center gap-2 leading-tight">
          <BiSolidColor />{' '}
          {data.attributes.car_colors.data
            .map((item) => item.attributes.color)
            .join(',')}
        </div>
      </div>
    </div>
  );
}
export default Card;
