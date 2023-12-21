import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import AnimatedBtn from '../premiumjetski/AnimatedBtn';
import { useCurrency } from '@/context/currencyContext';

const TravelCard = ({ item }) => {
  const { selectedCurrency, conversionRates } = useCurrency();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const convertPrice = (price) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(price) * rate);
    const priceFormatted = new Intl.NumberFormat('ae', {
      style: 'currency',
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
    <div className="relative w-full rounded-lg overflow-hidden shadow-md ">
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
          <div className="text-sm text-gray-500 mb-2">
            {showFullDescription
              ? item.attributes.description
              : `${item.attributes.description.slice(0, 100)}...`}
            <button
              className="text-blue-500 underline cursor-pointer"
              onClick={toggleDescription}
            >
              {showFullDescription ? 'Read Less' : 'Read More'}
            </button>
          </div>
          <div className="text-xs text-gray-500">{item.duration}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold ">
            {convertPrice(item.attributes.price)}{' '}
            <span className="text-xs font-light text-gray-500 ">
              per {item.attributes.pax} Person
            </span>
          </div>
          <div>
            <AnimatedBtn
              styles=" bg-gold px-6 py-2 bg-opacity-80 rounded-sm text-white border border-solid border-gold border-opacity-50"
              text={'Book Now'}
              msg={`Hi, I would like to know more about ${
                item.attributes.title
              } package with price ${convertPrice(item.attributes.price)} for ${
                item.attributes.pax
              } people`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
