// components/TravelCard.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AnimatedBtn from '../premiumjetski/AnimatedBtn';
import { useCurrency } from '@/context/currencyContext';

const TravelCard = ({ item }) => {
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
    <div className="relative w-full rounded-lg overflow-hidden shadow-md ">
      <Image
        className="w-full h-auto object-cover aspect-[16:9]"
        src={item.image}
        alt={item.title}
        width={500}
        height={1000}
      />
      <div className="px-4 md:px-6 py-8">
        <div className="mb-6">
          <div className="text-2xl font-semibold text-gray-600 mb-2">
            {item.title}
          </div>
          <div className="text-sm text-gray-500 mb-2">{item.description}</div>
          <div className="text-xs text-gray-500">{item.duration}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold ">
            {convertPrice(item.price)}{' '}
            <span className="text-xs font-light text-gray-500 ">
              for {item.pax} people
            </span>
          </div>
          <div>
            <AnimatedBtn
              styles=" bg-gold px-6 py-2 bg-opacity-80 rounded-sm text-white border border-solid border-gold border-opacity-50"
              text={'Book Now'}
              msg={`Hi, I would like to know more about ${
                item.title
              } package with price ${convertPrice(item.price)} for ${
                item.pax
              } people`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
