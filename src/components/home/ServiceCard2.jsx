"use client";
import Image from "next/image";

import { useCurrency } from "@/context/currencyContext";
import { motion } from "framer-motion";
import AnimatedBtn from "@/components/premiumjetski/AnimatedBtn";
import Link from "next/link";
function ServiceCard2({ url, title, price, link }) {
  const { selectedCurrency, conversionRates } = useCurrency();

  const convertPrice = (cost) => {
    const rate = conversionRates.rates[selectedCurrency];

    const amt = Math.round(Number(cost) * rate);
    const priceFormatted = new Intl.NumberFormat("ae", {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: 0, // Set minimumFractionDigits to 0
      maximumFractionDigits: 0, // Set maximumFractionDigits to 0
    }).format(amt);
    return priceFormatted;
  };
  return (
    <div>
      <motion.div
        className="relative w-full aspect-[1/1.5] max-h-[35vh] rounded overflow-hidden"
        whileHover={{
          scale: 1.02,
        }}
      >
        <Link href={link}>
          <Image
            src={url}
            alt={title}
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="100vw"
          />
        </Link>
        <div className="absolute p-4 text-white w-full h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="drop-shadow-2xl">
            <Link
              href={link}
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] uppercase
              font-medium tracking-wide text-xs md:text-2xl font-poppins
              text-center"
            >
              {title}
            </Link>
            {/* <span className="text-gray-400 text-sm">
              Starting from {convertPrice(price.split('/')[0])}/
              {price.split('/')[1]}
            </span> */}
          </div>
          {/* <div className="flex justify-center">
            <AnimatedBtn
              text={"View More"}
              msg={`I would like to book ${title} from Richy life Club`}
              styles={"mt-2 px-2 py-1 bg-gold text-white rounded-sm"}
            />
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceCard2;
