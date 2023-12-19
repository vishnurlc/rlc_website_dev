'use client';
import Image from 'next/image';

import { useCurrency } from '@/context/currencyContext';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedBtn from '@/components/premiumjetski/AnimatedBtn';
function PackageCard({ data }) {
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
    <motion.div
      className="relative w-full aspect-[1/1.5] max-h-[35vh] rounded overflow-hidden"
      whileHover={{
        scale: 1.02,
      }}
    >
      <Image
        src={data.image}
        alt={data.title}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="absolute p-4 text-white w-full h-fit bg-black bg-opacity-60 bottom-0 left-0 right-0 z-10">
        <div>
          <h2 className="uppercase font-medium tracking-wide text-xs md:text-sm font-poppins">
            {data.title}
          </h2>
          <span className="text-gray-400 text-sm">
            {' '}
            Starting from {convertPrice(data.price)}
          </span>
        </div>

        <AnimatedBtn
          text={'Book Now'}
          msg={`I would like to book ${data.title} from Richy life Club`}
          styles={'mt-2 px-2 py-1 bg-gold text-white rounded-sm'}
        />
      </div>
    </motion.div>
  );
}

export default PackageCard;
