'use client';
import React from 'react';
import { SectionHeading } from '..';
import Image from 'next/image';
import { Button } from '../ui/button/Button';
import { RiWhatsappFill } from 'react-icons/ri';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { useCurrency } from '@/context/currencyContext';
import { usePathname } from 'next/navigation';

const jetski = [
  {
    name: 'sedan',
    image: '/assets/chauffeur/sedan.avif',
    price: '1600',
  },
  {
    name: 'van',
    image: '/assets/chauffeur/van.jpeg',
    price: '1600',
  },
  {
    name: 'SUV',
    image: '/assets/chauffeur/suv.avif',
    price: '1600',
  },
];

const Ourfleets = () => {
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
    <div>
      <SectionHeading title={`Our fleets`} />
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
        {jetski.map((item, index) => (
          <div className="relative  w-full aspect-[357/406]" key={index}>
            <Image
              src={item.image}
              alt={`${item.name} rental | Richy life Club`}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
            <div className="absolute p-4 text-white w-full h-fit bg-black bg-opacity-60 bottom-0 left-0 right-0 z-10">
              <div>
                <h2 className="uppercase font-medium tracking-wide text-xl font-poppins">
                  {item.name}
                </h2>
                {item.price && (
                  <span className="text-gray-400 text-sm">
                    Starting from AED {item.price}
                  </span>
                )}
              </div>

              <Button className="mt-4 px-4 py-2 bg-gold text-white rounded-sm">
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourfleets;
