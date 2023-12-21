'use client';
import Image from 'next/image';

import { useCurrency } from '@/context/currencyContext';
import { motion } from 'framer-motion';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';
import Link from 'next/link';
function ServiceCard2({ url, title, price, link }) {
  const { selectedCurrency, conversionRates } = useCurrency();

  console.log(price);
  const convertPrice = (cost) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(cost) * rate);
    const priceFormatted = new Intl.NumberFormat('ae', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };
  return (
    <Link href={link}>
      <motion.div
        className="relative w-full aspect-[1/1.5] max-h-[35vh] rounded overflow-hidden"
        whileHover={{
          scale: 1.02,
        }}
      >
        <Image
          src={url}
          alt={title}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute p-4 text-white w-full h-fit bg-black bg-opacity-60 bottom-0 left-0 right-0 z-10">
          <div>
            <h2 className="uppercase font-medium tracking-wide text-xs md:text-sm font-poppins">
              {title}
            </h2>
            <span className="text-gray-400 text-sm">
              Starting from {convertPrice(price.split('/')[0])}/
              {price.split('/')[1]}
            </span>
          </div>

          <AnimatedBtn
            text={'Book Now'}
            msg={`I would like to book ${title} from Richy life Club`}
            styles={'mt-2 px-2 py-1 bg-gold text-white rounded-sm'}
          />
        </div>
      </motion.div>
    </Link>
  );
}

export default ServiceCard2;
