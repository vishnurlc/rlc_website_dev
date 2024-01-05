"use client";

import AnimatedBtn from "../premiumjetski/AnimatedBtn";
import Image from "next/image";
import { useCurrency } from "@/context/currencyContext";
import {
  MdAccessTime,
  MdLuggage,
  MdOutlineAirlineSeatReclineExtra,
} from "react-icons/md";
import { IoAirplaneOutline } from "react-icons/io5";
const DesertSafariCard = ({ item, order }) => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9 md:my-20">
      <div className={`lg:order-${order}`}>
        <div className=" mb-7">
          <h2 className=" text-2xl md:text-4xl mb-6">{item.attributes.name}</h2>
          <p className="text-sm md:text-xl text-gray-400">
            Starting from {convertPrice(item.attributes.price)}/person
          </p>
          {/* <p className="text-gray-500 text-sm md:text-base tracking-wide ">
            {item.attributes.description}
          </p> */}

          <Detail data={item} />
        </div>
        <AnimatedBtn
          text={"Book Now"}
          styles={"bg-gold text-white rounded-sm"}
          msg={`I'm writing to you today to inquire about the ${item.attributes.name}. I'm interested in learning more about its specifications, price, and availability.`}
        />
      </div>
      <div className="relative w-full h-full min-h-[350px] overflow-hidden rounded">
        <Image
          src={item.attributes.image.data[0].attributes.url}
          alt="Premium Desert Safari Packages | Richy life Club "
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50%",
          }}
          izes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="bg-black bg-opacity-10 absolute inset-0"></div>
      </div>
    </div>
  );
};

function Detail({ data }) {
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
      {/* <div className="px-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-sm md:text-base flex items-center gap-2 font-medium leading-tight">
          <MdAccessTime /> 5 hours {convertPrice(data.attributes.fivehours)}
        </div>
      </div> */}

      <div className="px-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary flex items-center gap-2 text-sm md:text-base font-medium leading-tight">
          <IoAirplaneOutline /> Airport {convertPrice(data.attributes.airport)}
        </div>
      </div>
      <div className="px-2 py-2  bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-sm md:text-base font-medium flex items-center gap-2 leading-tight">
          <MdOutlineAirlineSeatReclineExtra />
          {data.attributes.seatingcapacity}
        </div>
      </div>
      <div className="px-2 py-2 bg-slate-100 flex items-center justify-center">
        <div className="text-primary text-sm md:text-base font-medium flex items-center gap-2 leading-tight">
          <MdLuggage /> {data.attributes.luggage} bags
        </div>
      </div>
    </div>
  );
}

export default DesertSafariCard;
