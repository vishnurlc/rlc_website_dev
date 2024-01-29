"use client";

import AnimatedBtn from "../premiumjetski/AnimatedBtn";
import Image from "next/image";
import Link from "next/link";

import { useCurrency } from "@/context/currencyContext";

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
      <div>
        <div className=" mb-7">
          <Link href={`/premium-desert-adventure/${item.attributes?.slug}`}>
            <h2 className=" text-2xl md:text-4xl mb-6">
              {item.attributes.name}
            </h2>
          </Link>
          <p className="text-sm md:text-xl text-gray-400">
            Starting from {convertPrice(item.attributes.price)}/person
          </p>
          <Detail data={item.attributes.desert_safari_features} />
        </div>
        <AnimatedBtn
          text={"Book Now"}
          styles={"bg-gold text-white rounded-sm"}
          msg={`I'm writing to you today to inquire about the ${item.attributes.name}. I'm interested in learning more about its specifications, price, and availability.`}
        />
      </div>
    </div>
  );
};

function Detail({ data }) {
  return (
    <div className="py-3 flex gap-5 flex-wrap">
      {data.data.map((e, index) => (
        <div
          key={index}
          className="p-2 py-2 bg-slate-100 flex items-center justify-center"
        >
          <div className="text-primary flex items-center gap-2 text-base font-medium leading-tight">
            {e.attributes.feature}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DesertSafariCard;
