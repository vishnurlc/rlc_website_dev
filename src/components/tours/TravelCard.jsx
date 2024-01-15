import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedBtn from "../premiumjetski/AnimatedBtn";
import { useCurrency } from "@/context/currencyContext";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { Button } from "../ui/button/Button";
import { BookingModal } from "..";

const TravelCard = ({ item }) => {
  const { selectedCurrency, conversionRates } = useCurrency();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat("ae", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amt);
    return priceFormatted;
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <Link
        href={`/tours-excursions/${item.attributes.slug}`}
        className="relative w-full rounded-lg overflow-hidden shadow-md "
      >
        <Image
          className="w-full h-auto object-cover aspect-[16:9]"
          src={item.attributes.image.data[0].attributes.url}
          alt={item.attributes.title}
          width={500}
          height={1000}
        />
        <div className="px-4 md:px-6 py-8">
          <div className="mb-6">
            <div className="text-2xl font-semibold text-gray-600 mb-2">
              {item.attributes.title}
            </div>
            {/* <div className="text-sm text-gray-500 mb-2">
              {showFullDescription
                ? item.attributes.description
                : `${item.attributes.description.slice(0, 100)}...`}
              <button
                className="text-blue-500 underline cursor-pointer"
                onClick={toggleDescription}
              >
                {showFullDescription ? 'Read Less' : 'Read More'}
              </button>
            </div> */}
            <div className="py-3 flex gap-5 flex-wrap">
              <div className="p-2 py-2 bg-slate-100 flex items-center justify-center">
                <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
                  <MdAccessTime /> {item.attributes.duration}
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500">{item.duration}</div>
          </div>
          <div className="flex gap-6 flex-col w-full">
            <div className="text-2xl font-semibold ">
              {convertPrice(item.attributes.price)}{" "}
              <span className="text-xs font-light text-gray-500 ">
                per {item.attributes.pax} Person
              </span>
            </div>

            <div className="flex w-full justify-between  items-center gap-4">
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
                  href={`https://wa.me/${
                    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
                  }?text=?text=Hi, I would like to know more about ${
                    item.attributes.title
                  } package with price ${convertPrice(
                    item.attributes.price
                  )} for ${item.attributes.pax} people`}
                >
                  <RiWhatsappFill size={24} color="#006039" />
                </Link>
              </div>
              <Button>See Details</Button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TravelCard;
