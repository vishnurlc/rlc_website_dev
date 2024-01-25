"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import {
  MdAccessTime,
  MdLuggage,
  MdOutlineAirlineSeatReclineExtra,
} from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BookingModal, CustomVideoPlayer, ModalComponent } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCurrency } from "@/context/currencyContext";
import { Button } from "../button/Button";

function JetskiCard({ variant, data }) {
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const { selectedCurrency, conversionRates } = useCurrency();
  const path = usePathname();

  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat("ae", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 w-full lg:grid-cols-5  max-w-[1200px] rounded-sm overflow-hidden mx-auto bg-[#fbfbfb]">
          <Link
            href={`${path}/${data.attributes.slug}`}
            className="col-span-3 relative w-full aspect-[2/1] min-h-[220px] "
          >
            <Image
              src={data.attributes.image?.data[0].attributes.url}
              alt={`Rent ${data.attributes.name} with Richy life Club`}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
            />
          </Link>
          <div className="p-5 col-span-1 md:col-span-2">
            <div className="text-black h-full flex flex-col items-start justify-between">
              <h3 className="text-primary text-2xl font-bold leading-[29.04px]">
                <Link href={`${path}/${data.attributes.slug}`}>
                  {data.attributes.name}
                </Link>
                <div className="text-sm text-gray-500 my-2">
                  {showFullDescription
                    ? data.attributes.description
                    : `${data.attributes.description?.slice(0, 150)}...`}
                  <Link
                    href={`${path}/${data.attributes.slug}`}
                    className="text-primary underline cursor-pointer"
                  >
                    {showFullDescription ? "Read Less" : "Read More"}
                  </Link>
                </div>
              </h3>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full py-5 gap-6">
                <div className="w-full md:w-fit">
                  {/* <p className="text-secondary text-sm">From</p> */}
                  <span className="text-primary font-normal text-2xl">
                    {convertPrice(data.attributes.price)}{" "}
                  </span>
                  <div className="flex  text-primary py-1 font-medium leading-tight text-xs">
                    <AiOutlineExclamationCircle /> &nbsp; <span> +5% VAT</span>
                  </div>
                </div>
                <div className="flex justify-between md:justify-start items-center gap-4 w-full md:w-fit">
                  <div className="flex gap-4 ">
                    <Link
                      href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer"
                    >
                      <FaPhoneAlt size={24} color="#DCA24B" />
                    </Link>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer"
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I would like to know more about ${data.attributes.name} booking`}
                    >
                      <RiWhatsappFill size={24} color="#006039" />
                    </Link>
                  </div>
                  <Button
                    action={() => setBookingOpen(true)}
                    msg={`I would like to know more about ${data.attributes.name} booking`}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BookingModal
          open={bookingOpen}
          setOpen={setBookingOpen}
          item={"tourAndExcursion"}
        />

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
      </div>
    </div>
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

function CarDetail({ data }) {
  const { selectedCurrency, conversionRates } = useCurrency();

  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat("ae", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };
  return (
    <div className="py-3 flex gap-5 flex-wrap">
      <div className="p-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
          <MdAccessTime /> 10 hours {convertPrice(data.attributes.tenhours)}
        </div>
      </div>
      <div className="px-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-sm md:text-base font-medium leading-tight">
          <IoAirplaneOutline /> Airport {convertPrice(data.attributes.airport)}
        </div>
      </div>
      <div className="px-2 py-2  bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-sm md:text-base font-medium flex items-center gap-2 leading-tight">
          <MdOutlineAirlineSeatReclineExtra /> Seats{" "}
          {data.attributes.extensionpirce}
        </div>
      </div>
      <div className="px-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-sm md:text-base font-medium flex items-center gap-2 leading-tight">
          <MdLuggage /> Luggage {data.attributes.additionalcity}
        </div>
      </div>
    </div>
  );
}
export default JetskiCard;
