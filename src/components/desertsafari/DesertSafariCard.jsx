'use client';
import React from 'react';
import AnimatedBtn from '../premiumjetski/AnimatedBtn';
import Image from 'next/image';
import { useCurrency } from '@/context/currencyContext';
const DesertSafariCard = ({ item }) => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-16">
      <div className="">
        <div className="text-white mb-7">
          <h2 className=" text-2xl md:text-4xl mb-6">{item.attributes.name}</h2>
          <p className="text-sm md:text-xl">
            {convertPrice(item.attributes.price)} / PERSON
          </p>
          <p className="text-gray-500 text-sm md:text-base tracking-wide ">
            {item.attributes.description}
          </p>
        </div>
        <AnimatedBtn
          text={'Book Now'}
          styles={'bg-gold text-white rounded-sm'}
          msg={`I'm writing to you today to inquire about the ${item.attributes.name}. I'm interested in learning more about its specifications, price, and availability.`}
        />
      </div>
      <div className="relative w-full h-full min-h-[250px]">
        <Image
          src={item.attributes.image.data[0].attributes.url}
          alt="Yamaha Golden Jetski "
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes="100vw"
        />
        <div className="jetskigradient absolute inset-0"></div>
      </div>
    </div>
  );
};

export default DesertSafariCard;
